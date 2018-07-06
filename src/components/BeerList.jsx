import React from 'react'
import Beer from './Beer'
import PropTypes from 'prop-types'

function BeerList(props){
  return (
    <div>
      <hr/>
      {props.beerList.map((beer) =>
        <Beer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          formattedBottledTime={beer.formattedBottledTime}
          key={beer.id}/>
      )}
    </div>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array
}


export default BeerList
