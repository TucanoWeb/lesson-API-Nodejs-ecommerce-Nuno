const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const Orders = require("../../models/orders")

const OrdersRoute = (app) => {

    app.get('/orders-list', async (req, res) => {

        await Orders.findAll()
            .then((orders) => {
                return res.json({
                    error: false,
                    mensage: "orders list",
                    orders
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })


    app.get('/orders/:id', async (req, res) => {

        await Orders.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((orders) => {
                return res.json({
                    error: false,
                    mensage: "orders list",
                    orders
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })

    app.post("/orders-create", async (req, res) => {
        await Orders.create(req.body)
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

    app.put("/orders-update/:id", async (req, res) => {

        await Orders.update(req.body, {
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


    app.delete("/orders-delete/:id", async (req, res) => {

        await Orders.destroy({
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

module.exports = OrdersRoute