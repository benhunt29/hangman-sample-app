export const generateLetterMap = (phrase = '') => {
  let letterMap = new Map()

  let nonAlphabetical = new RegExp(/[^A-Z]/gi)

  phrase.split('').forEach((char, index) => {
    let lowerCaseChar = char.toLowerCase()
    let existingLetter = letterMap.get(lowerCaseChar)
    if (existingLetter) {
      let { indices, visible, guessed } = existingLetter
      letterMap.set(lowerCaseChar, {
        indices: [...indices, index],
        visible,
        guessed
      })
    } else {
      letterMap.set(lowerCaseChar, {
        indices: [index],
        visible: nonAlphabetical.test(lowerCaseChar),
        guessed: false
      })
    }
  })
  return letterMap
}
