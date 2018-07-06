import React from 'react'
import PropTypes from 'prop-types'
import BeerList from './BeerList'
import BeerDetail from './BeerDetail'

function Admin(props){
  console.log(props.currentRouterPath)
  return (
    <div>
      <h2>Admin</h2>
      <BeerDetail />
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}/>
    </div>
  )
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func.isRequired
}

export default Admin
