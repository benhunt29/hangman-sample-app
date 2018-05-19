const faker = require('faker')

function getRandomPhrase (minLength) {
  return faker.company.catchPhrase()
}

module.exports = {
  getRandomPhrase
}
