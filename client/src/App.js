import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import Game from './containers/Game'

class App extends Component {
  render () {
    console.log(this.context)

    return (
      <Game />
    )
  }
}

export default App
