import React from "react";
import logo from "../../logo.jpg"
export default function Header() {
    
    return <div className="header">
        <span className="brand">AI Turkish</span>
        <img alt="logo" src={logo}/>
    </div>
}