import React from 'react'

function NewBeerForm(){

  function handleNewBeerFormSubmission(event){
    event.preventDefault();
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
          placeholder= 'Beer Name'/><br/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'/><br/>
        <input
          type='text'
          id='description'
          placeholder='Description'/><br/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'/><br/>
        <input
          type='text'
          id='price'
          placeholder='Price'/><br/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining'/><br/>
        <button type='submit' class="btn btn-success">Add!</button>
      </form>
    </div>
  )
}

export default NewBeerForm
