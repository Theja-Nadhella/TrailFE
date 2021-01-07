import { GET_TIMECARD, GET_TIMECARDS, DELETE_TIMECARD } from "../actions/type";

const initialState={
    timecards:[],
    timecard:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_TIMECARDS:
            return{
                ...state,
                timecards:action.payload
            }
        case GET_TIMECARD:
            return{
                ...state,
                timecard:action.payload
            }
            case DELETE_TIMECARD:
            return{
                ...state,
                timecards:state.timecards.filter(
                    timecard=>timecard.timecardId!==action.payload
                )
            };
            default:
                return state;

    }
}