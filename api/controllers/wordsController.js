const express = require('express')
const router = express.Router()

const wordsService = require('../services/wordsService')

/* GET home page. */
router.get('/random', async function (req, res, next) {
  let randomWord = wordsService.getRandomWord()
  res.send({word: randomWord})
})

module.exports = router
