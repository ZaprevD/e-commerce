const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define('user', {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    First_Name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Last_Name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true,
        validate: {
            notNull: { args: true, msg: "You must enter email" }
        },
    },
    Password: {
        type: Sequelize.STRING(220),
        allowNull: false
    },
    Is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
},
    {
        freezeTableName: true,
        tableName: "user",
        timestamps: false
    }

)