import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
// import { robots } from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.scss';


// State - an object that describes your application here, it is robot and searchbox
// parent tells the child about the prop 
// const state = {
//     robots: robots,
//     searchfeild: ''
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
          <a href="https://github.com/Vipuldeep/Robofriends"><p className='tc'>@vipuldeep</p></a>
        </div>
      );
  }
}

export default App;