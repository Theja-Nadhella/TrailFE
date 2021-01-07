import { GET_EMPLOYEE, GET_EMPLOYEES, DELETE_EMPLOYEE } from "../actions/type";

const initialState={
    employees:[],
    employee:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_EMPLOYEES:
            return{
                ...state,
                employees:action.payload
            }
        case GET_EMPLOYEE:
            return{
                ...state,
                employee:action.payload
            }
            case DELETE_EMPLOYEE:
            return{
                ...state,
                employees:state.employees.filter(
                    employee=>employee.employeeId!==action.payload
                )
            };
        default:
            return state;
    }
}