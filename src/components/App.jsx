import React from 'react'
import Body from './Body'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewBeerForm from './NewBeerForm'



function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/newbeer' component={NewBeerForm} />
      </Switch>
    </div>
  )
}

export default App
