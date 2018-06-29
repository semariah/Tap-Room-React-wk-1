import React from 'react'
import Body from './Body'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewBeerForm from './NewBeerForm'
import Error404 from './Error404'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/newbeer' component={NewBeerForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App
