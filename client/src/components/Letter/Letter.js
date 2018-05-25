import React from 'react'
import PropTypes from 'prop-types'
import Column from '../Column/Column'
import styles from './Letter.css'

const Letter = (props) => {
  let { visible, character } = props
  let className = visible ? 'guessed-letter' : 'hidden-letter'
  if (character === '') {
    className += ' empty-string'
  }
  return (
    <Column className={'is-1'}>
      <div className={`${className} letter`}>
        <span>{character}</span>
      </div>
    </Column>
  )
}

Letter.propTypes = {
  visible: PropTypes.bool,
  character: PropTypes.string
}

export default Letter
