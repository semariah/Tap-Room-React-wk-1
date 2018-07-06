import React from 'react'
import BeerList from './BeerList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import BeerControl from './BeerControl'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this)
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice()
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList})
  }

  render(){
    return(
      <div>
        <style jsx global>{`
          body{
            font-family: sans-serif;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/newbeer' component={BeerControl} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
