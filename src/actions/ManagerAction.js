import axios from 'axios';
import { GET_ERRORS, GET_MANAGER,GET_MANAGERS, DELETE_MANAGER } from './type';
export const createManager=(manager,history)=>async dispatch=> {
    try {
        await axios.post (`http://localhost:8081/api/v2/Manager/CreateManager`,manager);
        history.push("/managerDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getAllManager=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/v2/Manager/all");
    dispatch({
        type:GET_MANAGERS,
        payload:res.data        
    })
}
export const updateManager=(manager,history)=>async dispatch=> {
    try {
      console.log(manager);
       //console.log(history);
        await axios.put(`http://localhost:8081/api/v2/Manager/editManager/${manager.managerId}`,manager);
        history.push("/managerDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getManagerById=(managerId,manager,history)=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/v2/Manager/getById/"+managerId,manager);
    dispatch({
        type:GET_MANAGER,
        payload:res.data
    })
}
    export const deleteManager=(managerId)=>async dispatch=>{
        if(window.confirm("Are you sure ? This will delete all the data related to Manager.")) {
            await axios.delete(`http://localhost:8081/api/v2/Manager/${managerId}`);
            dispatch({
               type:DELETE_MANAGER,
                payload:managerId
            })

        }
    }