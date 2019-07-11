import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import House from './components/House/House'
import Wizard from'./components/Wizard/Wizard'

export default (
    <div>
        <Switch>
            <Route component = {Dashboard} exact path='/'/>
            <Route component = {Wizard} path= '/Wizard'/>
        </Switch>
    </div>
)