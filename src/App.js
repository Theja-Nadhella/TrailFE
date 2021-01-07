import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import HomeComponent from './components/Home';

import AddEmployee from './components/employee/AddEmployee';
import EmployeeDashBoard from './components/employee/EmployeeDashBoard';
import UpdateEmployee from './components/employee/UpdateEmployee';
import ViewEmployee from './components/employee/ViewEmployee';

import { Provider } from 'react-redux';

import AddTimecard from './components/timecard/AddTimecard';
import TimecardDashBoard from './components/timecard/TimecardDashBoard';
import ViewTimecard from './components/timecard/viewTimecard';

import AddManager from './components/manager/AddManager';
import ManagerDashBoard from './components/manager/ManagerDashBoard';
import UpdateManager from './components/manager/UpdateManager';
import ViewManager from './components/manager/ViewManager';
import store from './store';
 
function App() {        
 
  return (  
    <Provider store={store}>  
    
         <Router>
       
       <HeaderComponent/>
       
       <Route exact path="/Home" component={HomeComponent}/>
       <Route exact path="/addEmployee" component={AddEmployee}/>
       <Route exact path="/employeeDashboard" component={EmployeeDashBoard}/>
       <Route exact path="/updateEmployee/:employeeId" component={UpdateEmployee}/>
        <Route exact path="/viewemployee/:employeeId" component={ViewEmployee}/>

       <Route exact path="/addManager" component={AddManager}/>
        <Route exact path="/managerDashboard" component={ManagerDashBoard}/>
        <Route exact path="/updateManager/:managerId" component={UpdateManager}/> 
        <Route exact path="/viewManager/:managerId" component={ViewManager}/>

        <Route exact path="/addTimecard" component={AddTimecard}/>
        <Route exact path="/timecardDashboard" component={TimecardDashBoard}/>
        <Route exact path="/viewTimecard/:timecardId" component={ViewTimecard}/>
      
       
       <FooterComponent/>
     </Router>
     </Provider>   
  );
}

export default App;

