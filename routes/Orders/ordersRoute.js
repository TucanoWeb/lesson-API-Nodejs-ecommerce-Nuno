const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const Orders = require("../../models/orders")

const OrdersRoute = (app) => {

    app.get('/orders/:id', async (req, res) => {

        return res.json({
            error: false,
            mensage: "Hello World!"
        })
    })

}

module.exports = OrdersRoute