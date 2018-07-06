import React from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'


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
    return (
      <ConfirmationQuestions />
    )
  }
}

export default BeerControl
