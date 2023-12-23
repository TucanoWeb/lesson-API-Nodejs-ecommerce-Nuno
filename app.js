const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const { UserRoute, InvoiceRoute, OrdersRoute, ProductsRoute } = require("./routes/index")

UserRoute(app)
InvoiceRoute(app)
OrdersRoute(app)
ProductsRoute(app)

app.listen(8081, () => {
    console.log("Server")
})