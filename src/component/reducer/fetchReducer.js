import { GET_REQUEST, REQUEST_FAILED, REQUEST_SSUCCESS } from "../vars/vars";

const initialDAta={
    isLoading: false,
     user:[],
    error:null,
}



export const fetchReducer=(state=initialDAta,action)=>{
    switch (action.type) {
        case GET_REQUEST:
            
            return{
                ...state,
                isLoading:true,
            };

            case REQUEST_SSUCCESS:
            
            return{
            user:action.payload,
                isLoading:false,
            };
            case REQUEST_FAILED:
            
            return{
            user:[],
                isLoading:false,
            };


    
        default:
            return state;
    }
}