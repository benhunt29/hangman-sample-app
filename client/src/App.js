import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'
import bulma from 'bulma'

import Game from './containers/Game'

class App extends Component {
  render () {
    console.log(this.context)

    return (
      <section className='section'>
        <div className='container'>
          <Game />
        </div>
      </section>
    )
  }
}

export default App
