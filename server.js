const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const db = require('./config/keys').mongoURI

mongoose.connect(db).then(() => console.log('mongoDB connected')).catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send("I work"))

app.use('/api/users', users)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))
