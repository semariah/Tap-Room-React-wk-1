import React from 'react'
import Beer from './Beer'
import PropTypes from 'prop-types'

function BeerList(props){
  return (
    <div>
      <hr/>
      {props.beerList.map((beer, index) =>
        <Beer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={index}/>
      )}
    </div>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array
}


export default BeerList
