import axios from 'axios'

export const FETCH_PHRASE_PENDING = 'FETCH_PHRASE_PENDING'
export const FETCH_PHRASE_SUCCESS = 'FETCH_PHRASE_SUCCESS'
export const FETCH_PHRASE_FAIL = 'FETCH_PHRASE_FAIL'

export const fetchPhraseSuccess = (phrase = '') => {
  return {
    type: FETCH_PHRASE_SUCCESS,
    payload: phrase
  }
}

export const fetchPhraseFail = () => {
  return {
    type: FETCH_PHRASE_FAIL
  }
}

export const fetchPhrasePending = () => {
  return {
    type: FETCH_PHRASE_PENDING
  }
}

export const fetchPhrase = () => {
  return async function (dispatch) {
    try {
      dispatch(fetchPhrasePending())
      let { data } = await axios({
        method: 'GET',
        url: '/api/phrase/random'
      })
      dispatch(fetchPhraseSuccess(data.phrase))
    } catch (err) {
      dispatch(fetchPhraseFail())
    }
  }
}
