import React from "react";
// @ts-ignore
import logo from "../../logo.jpg"
export default function Header() {
    
    return <div className="header">
        <img alt="logo" src={logo}/>
        <span className="brand">Claude</span>
    </div>
}