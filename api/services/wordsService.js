const faker = require('faker')

function getRandomWord (minLength) {
  return faker.company.catchPhrase()
}

module.exports = {
  getRandomWord
}
