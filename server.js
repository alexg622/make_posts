const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send("I work"))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))
