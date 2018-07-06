import React from 'react'
import PropTypes from 'prop-types'
import BeerList from './BeerList'

function Admin(props){
  console.log(props.currentRouterPath)
  return (
    <div>
      <h2>Admin</h2>
      <BeerList beerList={props.beerList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  )
}

Admin.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}

export default Admin
