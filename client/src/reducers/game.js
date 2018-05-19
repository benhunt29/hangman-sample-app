import { FETCH_PHRASE_PENDING, FETCH_PHRASE_FAIL, FETCH_PHRASE_SUCCESS } from '../actions'
import { generateLetterMap } from '../services/phraseService'

const INITIAL_STATE = {
  phrase: '',
  splitPhrase: [],
  guesses: new Set(),
  wrongGuessesRemaining: 10,
  letterMap: new Map(),
  correctGuess: false,
  incorrectGuess: false,
  win: false,
  lose: false,
  fetchingPhrase: false
}

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PHRASE_PENDING:
      return {
        ...state,
        fetchingPhrase: true
      }
    case FETCH_PHRASE_SUCCESS:
      let phrase = action.payload
      let splitPhrase = phrase.split('')
      return {
        ...state,
        phrase,
        letterMap: generateLetterMap(splitPhrase),
        splitPhrase,
        fetchingPhrase: false
      }
    case FETCH_PHRASE_FAIL:
      return {
        ...state,
        fetchingPhrase: false
      }
    default:
      return state
  }
}

export default game
