import React from 'react'
import PropTypes from 'prop-types'


function Beer(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Brewer: {props.brewer}</h3>
      <p>Description: {props.description}</p>
      <p>Abv: {props.abv}</p>
      <p>Price: {props.price}</p>
      <p>Remaining: {props.remaining}</p>
      <hr/>
    </div>
  )
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired


}

export default Beer
