import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './components/Home';

import CreateManager from './components/manager/CreateManagerComponent';
import ListManager from './components/manager/ListManagerComponent'; 
import UpdateManager from './components/manager/UpdateManagerComponent';

import CreateEmployee from './components/employee/CreateEmployeeComponent';
import UpdateEmployee from './components/employee/UpdateEmployeeComponent';
import ListEmployee from './components/employee/ListEmployeeComponent';

import EditTimeCard from './components/timecard/EditTimeCardComponent';
import Timecard from './components/timecard/ViewTimeCardComponent';
import TimeCardView from './components/timecard/CheckTimeCardComponent';
import AddTimeCard from './components/timecard/AddTimeCardComponent';


function App() {       
 
  return (    
    <div>
        <Router>
              <HeaderComponent />  
                <div className="container">                               
                    <Switch>                
                    <Route path = "/" exact component = {Home}></Route> 
                             
                      <Route path = "/employees/:id" exact component = {ListEmployee}></Route>
                      <Route path = "/update-employee/:id" component = {UpdateEmployee}></Route>
                      <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>

                      <Route path = "/add-manager" component = {CreateManager}></Route>
                      <Route path = "/update-manager/:id" component = {UpdateManager}></Route>
                      <Route path = "/manager/:id" exact component = {ListManager}></Route>

                      <Route path = "/timecard/:id"  component = {Timecard}></Route>
                      <Route path = "/update-timecard/:id" component = {EditTimeCard}></Route>
                      <Route path = "/add-timecard/:id" component = {AddTimeCard}></Route>
                      <Route path = "/timecard-view/:id" exact component = {TimeCardView}></Route>

                          
                  </Switch>
                 
                </div>             
              <FooterComponent />
              
        </Router>
    </div>
    
  );
}

export default App;

