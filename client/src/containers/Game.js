import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { fetchPhrase } from '../actions'
import Letter from '../components/Letter/Letter'
import GuessForm from '../components/GuessForm/GuessForm'
import Column from '../components/Column/Column'
import Columns from '../components/Columns/Columns'

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
    let letters = splitPhrase.map((char, ind) => {
      let lowerCaseChar = char.toLowerCase()
      let letter = letterMap.get(char.toLowerCase())
      return <Letter visible={letter.visible} character={lowerCaseChar} key={ind} />
    })
    return <Columns className='is-variable is-mobile is-multiline'>{letters}</Columns>
  }

  render () {
    return (
      <Columns>
        <Column className='is-four-fifths'>
          <p className='title is-2'>Company Jargon Hangman</p>
          <p className='subtitle is-5'>Anticipate what jargon your boss is going to say to a client so you can prepare to answer for it</p>
          {this.renderLetters()}
          <GuessForm submitHandler={this.submitGuess} />
        </Column>
        <Column>
          <button
            type='button'
            onClick={this.fetchPhrase}
            className='button is-info'
          >
          New Jargon
          </button>
        </Column>
      </Columns>
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
