const Sequelize = require("sequelize")
const db = require('./db')

const Products = db.define("products", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    value: {
        type: Sequelize.NUMBER,
        allowNull: false,
    }
})


Products.sync()

module.exports = Products