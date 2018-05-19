import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { fetchPhrase } from '../actions'
import Letter from '../components/Letter'
import GuessForm from '../components/GuessForm'

class Game extends Component {
  constructor (props) {
    super(props)
    this.fetchPhrase = this.fetchPhrase.bind(this)
    this.submitGuess = this.submitGuess.bind(this)
  }

  fetchPhrase (event) {
    this.props.fetchPhrase()
  }

  submitGuess (event) {
    event.preventDefault()
    console.log(event)
  }

  renderLetters () {
    let { splitPhrase, letterMap } = this.props
    // console.log(letterMap)
    // let letters = []

    // if (letterMap) {
    //   let counter = 0
    //   for (let [key, val] of letterMap) {
    //     letters.push()
    //   }
    //   console.log(letters)
    // }

    let letters = splitPhrase.map((char, ind) => {
      let lowerCaseChar = char.toLowerCase()
      let letter = letterMap.get(char.toLowerCase())
      return <Letter visible={letter.visible} character={lowerCaseChar} key={ind} />
    })
    return <Fragment>{letters}</Fragment>
  }

  render () {
    return (
      <div>
        {this.renderLetters()}
        <div>
          <button
            type='button'
            onClick={this.fetchPhrase}
          >
          Get new company catch phrase
          </button>
        </div>
        <GuessForm submitHandler={this.submitGuess} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { letterMap, splitPhrase } = state.game
  return {
    letterMap,
    splitPhrase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhrase: () => {
      dispatch(fetchPhrase())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
