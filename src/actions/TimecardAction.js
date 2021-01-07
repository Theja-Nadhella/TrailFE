import axios from 'axios';
import { GET_ERRORS, GET_TIMECARD,GET_TIMECARDS, DELETE_TIMECARD } from './type';
export const createTimeCard=(timeCardId,timecard,history)=>async dispatch=> {
    try {
        const tc={

            "date":timecard.date,
            "hours":timecard.hours,
            "projectId":timecard.projectId,
            "projectName":timecard.projectName,
            "status":timecard.status,
            "employeeId":'99999'
        }
        await axios.post ("http://localhost:8081/api/v2/timecard/timecardEntry/99999",tc);
        history.push("/timecardDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getAllEntries=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/v2/timecard/timecards");
    dispatch({
        type:GET_TIMECARDS,
        payload:res.data        
    })
}


export const getTimeCardById=(timeCardId,history)=>async dispatch=>{
    const res=await axios.get(` http://localhost:8081/api/v2/timecard/getTimeCard/12`);
    dispatch({
        type:GET_TIMECARD,
        payload:res.data
    })
}
    export const deleteTimeCard=(timeCardId)=>async dispatch=>{
        if(window.confirm("Are you sure ? This will delete all the data related to this Time card.")) {
            await axios.delete(`http://localhost:8081/api/v2/timecard/timecardDelete/${timeCardId}`);
            dispatch({
               type:DELETE_TIMECARD,
                payload:timeCardId
            })

        }
        
    }