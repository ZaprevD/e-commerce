const Sequelize = require("sequelize");
const db  = require("../database");

module.exports = db.sequelize.define("category" , {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING(25),
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: "category",
    timestamps: false
})