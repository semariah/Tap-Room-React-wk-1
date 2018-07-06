import React from 'react'
import PropTypes from 'prop-types'


function Beer(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-image: url('https://www.les3brasseurs.ca/sites/default/files/cask/les3brasseurs-glass.png');
          background-repeat: no-repeat;
          background-position: center;
          height: 500%;
        }
      `}</style>
      <h5>Name: {props.name}</h5>
      <h5>Brewer: {props.brewer}</h5>
      <h5>Description: {props.description}</h5>
      <h5>Abv: {props.abv}</h5>
      <h5>Price: {props.price}</h5>
      <h5>Remaining: {props.remaining}</h5>
      <h5>Bottled Day: {props.formattedBottledTime} ago</h5>
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
  remaining: PropTypes.string.isRequired,
  formattedBottledTime: PropTypes.string.isRequired


}

export default Beer
