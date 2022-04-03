import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()

    const onClickHome = () =>{
        navigate('./')
    }


    return ( 
        <div className='container'>
            <nav className="nav">
                <Link to="/" className='h3 nav-link'>Faculty Management</Link>
            </nav>
        </div>
    
    )
}

export default Header