import React from 'react'
import Menu from './Menu.js'
import './header.css'
import logo from '../images/logo.svg'

export default function Header() {
    return (
        <div className="navbar">
           <div className="logo_container">
            <img src={logo} alt="company_logo"/>            
        </div>
        
            <Menu/>
        </div>
    )
}
