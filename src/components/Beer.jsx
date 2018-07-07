import React from 'react'
import PropTypes from 'prop-types'


function Beer(props){
  const beerInfo =
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
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onBeerSelection({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, formattedBottledTime: props.formattedBottledTime});}}>
        {beerInfo}
      </div>
    )
  } else {
    return (
      <div>
        {beerInfo}
      </div>

    )
  }
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  formattedBottledTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
  onBeerSelection: PropTypes.func
}

export default Beer
