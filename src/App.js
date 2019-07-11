
import React, {Component} from 'react';
import './App.css';
import routes from'./router'
import { HashRouter, Link } from "react-router-dom";
import Header from './components/Header/Header'
import axios from 'axios'
class App extends Component{
  constructor() {
    super()
    this.state = {
      houses: [],
      i: 0
    };
    
  }

  // componentDidMount() {
  //   axios
  //     .get('/api/houses')
  //     .then(res => {
  //       console.log('res db response', res)
      
        
  //     })

  //     .catch(err => console.log('err', err))
      
  // }


  render (){
    console.log('houses', this.state.houses);
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <Link to="/Dashboard" className="links">
      </Link>
    
      {routes}
    </div>
    </HashRouter>
  );
}
}
export default App;