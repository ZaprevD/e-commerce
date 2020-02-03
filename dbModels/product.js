const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define("product", {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Description: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    Is_sold: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    categoryId: {
        type: Sequelize.INTEGER,
        references: 'category',
        referencesKey: 'Id'
    }
}, {
    freezeTableName: true,
    tableName: "product",
    timestamps: false
})