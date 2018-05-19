import React from 'react'
import PropTypes from 'prop-types'

const Letter = (props) => {
  let { visible, character } = props
  console.log(character)
  let className = visible ? 'guessed-letter' : 'hidden-letter'
  if (character === '') {
    className += ' empty-string'
  }
  return (
    <span className={className}>
      {character}
    </span>
  )
}

Letter.propTypes = {
  visible: PropTypes.bool,
  character: PropTypes.string
}

export default Letter
