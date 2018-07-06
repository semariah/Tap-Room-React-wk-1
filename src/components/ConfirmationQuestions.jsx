import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(){
  return(
    <div>
      <p> Do you want to add a new beer to the list? </p>
      <button>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions
