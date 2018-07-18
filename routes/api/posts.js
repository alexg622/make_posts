const express = require('express')
const router = express.Router()
const Post = require('../../models/Post')
const User = require('../../models/User') 

router.get('/test', (req, res) => res.json({msg: "this works"}))



module.exports = router
