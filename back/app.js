require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userRoute = require('./routes/user-route');
const shippingAddressRoute  = require('./routes/shipping-address-route')
const orderProductRoute = require('./routes/order-product-route')
const orderRoute  = require('./routes/order-route')
const seafoodRoute = require('./routes/seafood-route')
const paymentRoute = require('./routes/payment-route')


const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use(userRoute)
app.use(shippingAddressRoute)
app.use(orderProductRoute)
app.use(orderRoute)
app.use(seafoodRoute)
app.use(paymentRoute)

// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))