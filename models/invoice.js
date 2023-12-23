const Sequelize = require("sequelize")
const db = require('./db')

const Invoice = db.define("invoice", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
    ,
    user_id: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    id_orders: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    value: {
        type: Sequelize.NUMBER,
        allowNull: false,
    }
})


Invoice.sync()

module.exports = Invoice