import React from 'react'
import BeerList from './BeerList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'
import BeerControl from './BeerControl'
import Moment from 'moment'
import Admin from './Admin'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      masterBeerList: [],
      selectedBeer: null
    }
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this)
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleChangingSelectedBeer(beer){
  this.setState({selectedBeer: beer});
  alert('The selected beer is: ' + this.state.selectedBeer.name);
}


  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice()
    newBeer.formattedBottledTime = (newBeer.timeOpen).fromNow(true)
    newMasterBeerList.push(newBeer)
    this.setState({masterBeerList: newMasterBeerList})
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBeerElapsedWaitTime(),
    60000
    )
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateBeerElapsedWaitTime() {
    console.log('check')
    let newMasterBeerList = this.state.masterBeerList.slice()
    newMasterBeerList.forEach((beer) =>
      beer.formattedBottledTime = (beer.timeOpen).fromNow(true)
    )
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
          <Route path='/admin' render={(props)=><Admin beerList={this.state.masterBeerList} currentRouterPath={props.location.pathname} onBeerSelection={this.handleChangingSelectedBeer} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App
