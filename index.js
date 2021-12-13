const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect( 'replace DB URI here', {useNewUrlParser: true} )
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open',()=> console.log('Connected to Mongoose'))
const startRoute = require('./routes/start')

app.use('/', startRoute)

app.listen(process.env.PORT || 3000)