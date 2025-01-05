import React from "react";
import logo from "../../logo.jpg"
export default function Header() {
    
    return <div className="header">
        <img src={logo}/>
        <span className="brand">Claude</span>
    </div>
}