import React from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'
import NewBeerForm from './NewBeerForm'
import PropTypes from 'prop-types'


class BeerControl extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this)
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentVisibleContent = null
    if(this.state.formVisibleOnPage){
      currentVisibleContent = <NewBeerForm onNewBeerCreation = {this.props.onNewBeerCreation}/>
    } else {
      currentVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    )
  }
}

BeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func
}


export default BeerControl
