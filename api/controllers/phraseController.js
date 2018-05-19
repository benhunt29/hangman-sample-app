const express = require('express')
const router = express.Router()

const phraseService = require('../services/phraseService')

/* GET home page. */
router.get('/random', async function (req, res, next) {
  let randomPhrase = phraseService.getRandomPhrase()
  res.send({phrase: randomPhrase})
})

module.exports = router
