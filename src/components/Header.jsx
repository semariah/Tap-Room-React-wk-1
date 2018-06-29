import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <h1>Beer List in PDX</h1>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add new Beer</Link>
    </div>
  )
}

export default Header
