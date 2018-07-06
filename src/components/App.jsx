import React from 'react'
import BeerList from './BeerList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import BeerControl from './BeerControl'
import Moment from 'moment'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      masterBeerList: []
    }
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this)
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice()
    newMasterBeerList.push(newBeer)
    this.setState({masterBeerList: newMasterBeerList})
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBeerElapsedWaitTime(),
      5000
    );
  }

  updateBeerElapsedWaitTime() {
    console.log("check");
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.forEach((beer) =>
      beer.formattedWaitTime = (beer.timeOpen).fromNow(true)
    );
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
          <Route exact path='/' render={() => <BeerList beerList={this.state.masterBeerList}/> }/>
          <Route path='/newbeer' render={() => <BeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
