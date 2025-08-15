const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
const cors = require('cors')

const shoppingListRoutes = require('./routes/shoppingListRoutes')
const itemRoutes = require('./routes/itemRoutes')

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDB')
})



app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(logger('dev'))

app.use('/shoppingList', shoppingListRoutes)
app.use('/item', itemRoutes)

app.listen(3000, () => {
    console.log('App is listening!')
})
