import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <style jsx>{`
        .title {
        text-align: center;
        padding: 60px 0 0 0;
        font-family: Helvetica;
        }
      `}</style>
      <div className="title">
        <h1>Beer List in PDX</h1>
      </div>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add new Beer</Link>
    </div>
  )
}

export default Header
