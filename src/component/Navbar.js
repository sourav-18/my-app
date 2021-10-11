import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
    return (
        <div className={`navbar-${props.mode}`}>
            <ul className="navbar-item">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>REACT INFO</li>
                <li>HELP</li>
            </ul>
            <div className="mode-container">
            <button onClick={props.lightSwitch} id="mode">LIGHTMODE</button>
            <button onClick={props.blueSwitch}  id="mode">BLUEMODE</button>
            <button onClick={props.darkSwitch} id="mode" >DARKMODE</button>
            <button onClick={props.pinkSwitch} id="mode" >PINKMODE</button>
            </div>
            
        </div>
    )
}
