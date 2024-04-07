import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import getAllData from './actions/actions';


const Usser = () => {

const {isloading,user,error}=useSelector((state)=>state)

const dispatch=useDispatch()

useEffect(()=>{
    dispatch(getAllData())

},[])


    return (
        <div>
            {user.map(a=>{
            return <article>
                <h1>
                    {a.id}
                </h1>
                <h1>
                    {a.name}
                </h1>
            </article>

            })}
            
        </div>
    );
};

export default Usser;