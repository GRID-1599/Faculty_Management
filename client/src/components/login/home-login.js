import React from 'react'
import { useNavigate } from 'react-router-dom'


function HomeLogin() {
    const navigate = useNavigate()


    const onClickUser = () =>{
        navigate('./user')
    }
    const onClickAdmin = () =>{
        navigate('./admin')
    }


    return ( 
        <div className='login-main'>
            <div className="h1">Login Main</div>
            <button onClick={onClickUser} >User</button>
            <button onClick={onClickAdmin} >Admin</button>
        </div> 
    
    )
}

export default HomeLogin