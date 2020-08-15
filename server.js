const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/default')
require('./config/db')(mongoose)

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes/studentRegistration.Router'))

app.listen(config.PORT, () => console.log(`Server is running on localhost:${config.PORT}`))