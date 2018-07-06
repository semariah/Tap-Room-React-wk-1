import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Moment from 'moment'

function NewBeerForm(props){
  let _name = null
  let _brewer = null
  let _description = null
  let _abv = null
  let _price = null
  let _remaining = null

  function handleNewBeerFormSubmission(event){
    event.preventDefault()
    props.onNewBeerCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, id: v4(), timeOpen: new Moment()})
    _name.value = ''
    _brewer.value = ''
    _description.value = ''
    _abv.value = ''
    _price.value = ''
    _remaining.value = ''
  }

  return (
    <div>
      <style jsx>{`
      div {
        background-image: url('http://static.shoplightspeed.com/shops/606770/files/005495006/547x396x1/cider.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 900%;
        paddingBottom: '100px',
      }
    `}</style>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder= 'Beer Name'
          ref={(input) => {_name = input}}/>
        <br/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input}}/>
        <br/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input}}/>
        <br/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input}}/>
        <br/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/>
        <br/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining'
          ref={(input) => {_remaining = input}}/>
        <br/>
        <button type='submit' class="btn btn-success">Add!</button>
      </form>
    </div>
  )
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}


export default NewBeerForm
