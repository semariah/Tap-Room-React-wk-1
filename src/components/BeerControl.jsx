import React from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'
import NewBeerForm from './NewBeerForm'


class BeerControl extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true})
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage)
  // }

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
