const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const HealthCheck = sequelize.define(
    'health_checks',
    {
        check_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        check_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
          defaultValue: DataTypes.NOW
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        indexes: [
            { fields: ['check_datetime'] }
        ],
    }
    );

module.exports = HealthCheck;