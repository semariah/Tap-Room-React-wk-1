import React from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'
import NewBeerForm from './NewBeerForm'


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
    let currentVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentVisibleContent = <NewBeerForm />;
    } else {
      currentVisibleContent = <ConfirmationQuestions />
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    )
  }
}

export default BeerControl
