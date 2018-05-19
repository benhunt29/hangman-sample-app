import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GuessForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guess: ''
    }
    this.updateGuess = this.updateGuess.bind(this)
  }

  updateGuess (event) {
    console.log(event.target.value)
    this.setState({guess: event.target.value.slice(-1)})
  }

  render () {
    return (
      <form onSubmit={this.props.submitHandler}>
        <input
          type='text'
          onChange={this.updateGuess}
          value={this.state.guess}
        />
      </form>
    )
  }
}

GuessForm.propTypes = {
  updateGuess: PropTypes.func
}

export default GuessForm
