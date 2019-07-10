
import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import House from './components/House/House'
import Wizard from'./components/Wizard/Wizard'
import routes from'./router'

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
    <div className="App">
      <Header/>
      <Dashboard>
        <Wizard>Wizard</Wizard>
      </Dashboard>
      <House/>  
    </div>
  );
}
}
export default App;