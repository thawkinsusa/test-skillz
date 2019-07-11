
import React, {Component} from 'react';
import './App.css';
import routes from'./router'
import { HashRouter, Link } from "react-router-dom";
import Header from './components/Header/Header'
class App extends Component{
  constructor() {
    super()
    this.state = {
      product: [],
      i: 0
    };
    
  }
  render (){
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