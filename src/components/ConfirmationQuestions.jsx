import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props){
  return(
    <div>
      <p> Do you want to add a new beer to the list? </p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions
