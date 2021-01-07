import axios from 'axios';
import { GET_ERROR, GET_EMPLOYEES, GET_EMPLOYEE,DELETE_EMPLOYEE } from './type';
export const createEmployee=(manager_Id,employee,history)=>async dispatch=> {
    try {
        const emp={

            "employeeId":employee.employeeId,
            "employeeName":employee.employeeName,
            "employeeEmail":employee.employeeEmail,
            "employeeRole":employee.employeeRole,
            "phoneNumber":employee.phoneNumber,
            "managerId":'8'
        }
        await axios.post ("http://localhost:8081/api/v2/employees/CreateEmployee/8",emp);
        history.push("/employeeDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error.response.data
        })
    }
}
export const updateEmployee=(employee,history)=>async dispatch=> {
    try {
      console.log(employee);
       //console.log(history);
        await axios.put(`http://localhost:8081/api/v2/employees/${employee.employeeId}`,employee);
        history.push("/employeeDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error.response.data
        })
    }
}
export const getAllEmployee=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/v2/employees/all");
    dispatch({
        type:GET_EMPLOYEES,
        payload:res.data
    })
}
export const getEmployeeById=(employeeId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8081/api/v2/employees/getById/${employeeId}`);
    dispatch({
        type:GET_EMPLOYEE,
        payload:res.data
    })
}
export const deleteEmployeeById=(employeeId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete all the data related to this Employee.")) {
        await axios.delete(`http://localhost:8081/api/v2/employees/deleteEmployee/${employeeId}`);
        dispatch({
           type:DELETE_EMPLOYEE,
            payload:employeeId
        })

    }
}