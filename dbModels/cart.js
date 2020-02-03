const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define('cart', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'user',
        referencesKey: 'Id'
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'product',
        referencesKey: "Id"
    }
},{
    freezeTableName: true,
    tableName: 'cart',
    timestamps: false
});