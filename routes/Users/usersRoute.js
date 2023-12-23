const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const Users = require("../../models/products")

const UsersRoute = (app) => {

    app.get('/users-list', async (req, res) => {

        await Users.findAll()
            .then((users) => {
                return res.json({
                    error: false,
                    mensage: "users list",
                    users
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })


    app.get('/users/:id', async (req, res) => {

        await Users.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((users) => {
                return res.json({
                    error: false,
                    mensage: "users list",
                    users
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })

    app.post("/user-create", async (req, res) => {
        await Users.create(req.body)
            .then(() => {
                return res.json({
                    error: false,
                    mensagem: "Success"
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })

    app.put("/user-update/:id", async (req, res) => {

        await Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensage: "Success"
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })


    app.delete("/user-delete/:id", async (req, res) => {

        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.json({
                    error: false,
                    mensage: "Success"
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })

    })

}

module.exports = UsersRoute