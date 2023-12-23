const Sequelize = require("sequelize")

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/database.sqlite"
})

sequelize.authenticate()
    .then(() => {
        console.log("Conn Success")
    })
    .catch((error) => {
        console.log("Conn error: ", error)
    })

module.exports = sequelize