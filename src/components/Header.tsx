import React from "react";
// @ts-ignore
import logo from "../../logo.jpg"
export default function Header() {
    
    return <div className="header">
        <span className="brand">AI Turkish</span>
        <img alt="logo" src={logo}/>
    </div>
}