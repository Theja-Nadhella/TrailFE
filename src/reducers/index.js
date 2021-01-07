import {combineReducers} from 'redux';
import employeesReducer from './employeesReducer';
import managersReducer from './managersReducer';


import errorReducer from './errorReducer';
import timecardsReducers from './timecardsReducers';

export default combineReducers({
   errorReducer:errorReducer,
   employees:employeesReducer,
   managers:managersReducer,
   timecards:timecardsReducers
});