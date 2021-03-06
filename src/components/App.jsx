import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBeerElapsedWaitTime(),
        60000
      );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleChangingSelectedBeer(beer){
    this.setState({selectedBeer: beerId});
  }

  updateBeerElapsedWaitTime() {
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList);
    Object.keys(newMasterBeerList).forEach(beerId => {
      newMasterBeerList[beerId].formattedWaitTime = (newMasterBeerList[beerId].timeOpen).fromNow(true);
    });
    this.setState({masterBeerList: newMasterBeerList});
  }

  handleAddingNewBeerToList(newBeer){
    var newBeerId = v4()
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {
      [newBeerId]: newBeer
    });
    newMasterBeerList[newBeerId].formattedWaitTime = newMasterBeerList[newBeerId].timeOpen.fromNow(true);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route path='/admin' render={(props)=><Admin beerList={this.state.masterBeerList} currentRouterPath={props.location.pathname} onBeerSelection={this.handleChangingSelectedBeer} selectedBeer={this.state.selectedBeer}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
