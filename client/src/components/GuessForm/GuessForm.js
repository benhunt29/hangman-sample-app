import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Columns from '../Columns/Columns'
import Column from '../Column/Column'

class GuessForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guess: ''
    }
    this.updateGuess = this.updateGuess.bind(this)
  }

  updateGuess (event) {
    this.setState({guess: event.target.value.slice(-1)})
  }

  render () {
    return (
      <form onSubmit={this.props.submitHandler} className='field'>
        <Columns>

          <Column className='is-1'>
            <input
              type='text'
              onChange={this.updateGuess}
              value={this.state.guess}
              className='input is-primary'
            />
          </Column>
          <Column>
            <button
              type='submit'
              className='button is-primary'
            >
              Guess
            </button>
          </Column>
        </Columns>

      </form>
    )
  }
}

GuessForm.propTypes = {
  updateGuess: PropTypes.func
}

export default GuessForm
