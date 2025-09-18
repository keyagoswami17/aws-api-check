## Pre-requsites
1. Node.js
2. PostgreSQL

## Setup

### 1. Install Dependencies
```sh
npm install
```
### 2. Set Up the .env File
Create a .env file in the directory and add the following
```sh
PORT=8080
DB_NAME=health_checks
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_DIALECT=postgres
DB_TIMEZONE=UTC
```
replace yourpassword with your PostgreSQL root password.

### 3. Create Database
```sh
CREATE DATABASE health_checks;
```
## Application Run
### 4. Start server
```sh
node app.js
```
### 5. Health check Endpoint
```sh
GET /healthz: Returns 200 OK status only, if completed successfully.
```
### 6. Error Handling
```sh
405 Method Not Allowed : Any requests other than GET gives this output.
400 Bad Request: if the request contains body or query parameters.
503 Service Unavailable: If database is unavailable.
```
