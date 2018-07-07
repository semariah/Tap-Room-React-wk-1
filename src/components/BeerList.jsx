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
          currentRouterPath={props.currentRouterPath}
          key={beer.id}
          onBeerSelection={props.onBeerSelection}/>

      )}
    </div>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
}


export default BeerList
