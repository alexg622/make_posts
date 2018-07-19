const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const Post = require('../../models/Post')

router.get('/test', (req, res) => res.json({msg: "this works"}))


router.get('/', (req, res) => {
  User.find().then(users => res.json(users)).catch(() => res.json({msg: "Could not find any users"}))
})

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId).then(user => res.json(user)).catch({msg: "Could not find user"})
})
router.get("/")
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password
  })

  newUser.save().then(user => res.json(user)).catch(() => res.json({msg: "please enter a valid name and password"}))
})

router.patch('/:userId', (req, res) => {
  User.update({_id: req.params.userId}, {name: req.body.name, password: req.body.password})
    .then(user => res.json(user)).catch(() => res.json({msg: "could not update user"}))
})

router.delete('/:userId', (req, res) => {
  User.findById(req.params.userId).then(user => {
    user.remove().then(user => res.json(user)).catch(() => res.json({msg: "Could not delete user"}))
  })
})

module.exports = router
