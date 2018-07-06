import React from 'react'
import Beer from './Beer'

function BeerList(){
  return (
    <div>
      <hr/>
      {masterBeerList.map((beer, index) =>
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

export default BeerList
