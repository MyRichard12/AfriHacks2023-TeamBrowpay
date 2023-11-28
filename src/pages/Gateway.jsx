import React, { useEffect } from 'react'
import Cookies from "universal-cookie"
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { currentUser } from '../redux/actions/userAction'
import ActivateUser from './auth/activateUser'
import { generateRegistrationToken } from '../apis/authApi'


function Gateway({component, path}) {
    const dispatcher = useDispatch()
    
    const user = useSelector(state => state.mainUserReducer.data)
    // user the class state selector to figure out whether the user is actively confirmed or not
    const loginState = useSelector(state => state.authReducer)

    const cookie = new Cookies() 

    const token = cookie.get('SECRETKEY')

    // if(!token){
    // cookie.set("SECRETKEY", loginState.data.token, {
    //     path: "/"
    //   })

    // }


    useEffect(() =>{
        // console.log(loginState)
        dispatcher(currentUser())
    },[])

   

    if(token){
        // if(userData?.name !== null){
            return ( <Outlet /> )
        // }
        //  else {
        //    generateRegistrationToken({email : userData?.email})
        //     return (
        //         <ActivateUser />
        //     )
        // }  
    }else {
      return( <Navigate to="/" replace /> )
    }

    
}

export default Gateway