import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

import App from './app'

ReactDom.render( 
    <BrowserRouter>
        < App/>
    </BrowserRouter>
     , 
     document.getElementById('root')
     )