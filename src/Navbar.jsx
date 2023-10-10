import React from 'react'
import './style.css'
import elanLogo from './assets/elanLogo.png'

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <img src={elanLogo} className="navbar-logo"></img>
        <div className="items">SCHEDULE</div>
        <div className="items">CONTACT US</div>
        <div className="items">EVENTS</div>
        <div className="items">SPONSORS</div>
      </div>
    </div>
  )
}

export default Navbar
