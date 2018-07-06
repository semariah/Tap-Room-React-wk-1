import React from 'react'

class BeerControl extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
  }
  
  render(){
    return (
      <div>
        <p>This is the BeerControl component!</p>
      </div>
    )
  }
}

export default BeerControl
