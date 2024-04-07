import axios from "axios"
import { GET_REQUEST, REQUEST_FAILED, REQUEST_SSUCCESS } from "../vars/vars"





const getAllData =()=>async(dispatch)=>{
    dispatch({type:GET_REQUEST});
   try{
    
    const res= await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({type:REQUEST_SSUCCESS,payload:res.data})
    
   }
   catch(error){
    dispatch({type:REQUEST_FAILED,payload:error.message})
   }

}
export default getAllData;



