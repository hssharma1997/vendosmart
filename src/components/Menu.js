import React from 'react'
import './menu.css'

export default function Menu() {
    return (
    <div className="menu">
        <ul className="navbar_items">
            <li className="navbar_item">HOME</li>
            <li className="navbar_item">BUYER</li>
            <li className="navbar_item">MANUFACTURER</li>
            <li className="navbar_item">FIND VENDOR</li>
            <li className="navbar_item">3D VIEWER</li>
            <li className="navbar_item">CONTACT</li>
            <li className="navbar_itemspecial signup_btn">LOGIN/ SIGNUP</li>
        </ul>
    </div>
        
    )
}
