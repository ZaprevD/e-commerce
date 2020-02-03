const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    pool: {
        max : 5,
        min: 0, 
        acquire : 30000,
        idle: 10000
    },
});

sequelize.authenticate().then(() => {
    console.log(`DB Connected!`);
}).catch(err => {
    console.log(`err: ${err}`)
})
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;