const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const Products = require("../../models/products")

const ProductsRoute = (app) => {

    app.get('/products-list', async (req, res) => {

        await Products.findAll()
            .then((products) => {
                return res.json({
                    error: false,
                    mensage: "products list",
                    products
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })


    app.get('/products/:id', async (req, res) => {

        await Products.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((products) => {
                return res.json({
                    error: false,
                    mensage: "products list",
                    products
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })

    app.post("/products-create", async (req, res) => {
        await Products.create(req.body)
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

    app.put("/products-update/:id", async (req, res) => {

        await Products.update(req.body, {
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


    app.delete("/products-delete/:id", async (req, res) => {

        await Products.destroy({
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

module.exports = ProductsRoute