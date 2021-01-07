import { GET_MANAGER, GET_MANAGERS, DELETE_MANAGER } from "../actions/type";

const initialState={
    managers:[],
    manager:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_MANAGERS:
            return{
                ...state,
                managers:action.payload
            }
        case GET_MANAGER:
            return{
                ...state,
                manager:action.payload
            }
            case DELETE_MANAGER:
            return{
                ...state,
                managers:state.managers.filter(
                    manager=>manager.managerId!==action.payload
                )
            };
            default:
                return state;

    }
}