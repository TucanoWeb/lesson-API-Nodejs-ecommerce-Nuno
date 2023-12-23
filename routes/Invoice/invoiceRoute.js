const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const Invoice = require("../../models/invoice")

const InvoicesRoute = (app) => {

    app.get('/invoices-list', async (req, res) => {

        await Invoice.findAll()
            .then((invoices) => {
                return res.json({
                    error: false,
                    mensage: "invoices list",
                    invoices
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })


    app.get('/invoices/:id', async (req, res) => {

        await Invoice.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((invoices) => {
                return res.json({
                    error: false,
                    mensage: "invoices list",
                    invoices
                })
            }).catch((error) => {
                return res.status(400).json({
                    error: true,
                    mensage: error
                })
            })
    })

    app.post("/invoices-create", async (req, res) => {
        await Invoice.create(req.body)
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

    app.put("/invoices-update/:id", async (req, res) => {

        await Invoice.update(req.body, {
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


    app.delete("/invoices-delete/:id", async (req, res) => {

        await Invoice.destroy({
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

module.exports = InvoicesRoute