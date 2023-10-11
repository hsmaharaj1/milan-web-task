import React, { useEffect } from 'react'
import './style.css'
import elanLogo from './assets/elanLogo.png'

function Navbar() {
  useEffect(() => {
    var key = 1;
    const toggle = document.getElementById('toggle'); // Use getElementById since it has an ID attribute
    const navBar = document.querySelector('.navbar-mobile');

    toggle.addEventListener('change', () => {
      if (key === 1) {
        navBar.classList.add('open');
        navBar.classList.remove('close');
        console.log("Open", key)
        key = 0;
      } else {
        navBar.classList.add('close');
        navBar.classList.remove('open');
        console.log("Close", key)
        key = 1;
      }
    });
  }, []);


  return (
    <div>
      <div className="navbar">
        <img src={elanLogo} className="navbar-logo"></img>
        <div className="items">SCHEDULE</div>
        <div className="items">EVENTS</div>
        <div className="items">SPONSORS</div>
        <div className="items">CONTACT US</div>
        <div class="menu">
          <div>
            <input type="checkbox" id="toggle" />
            <label for="toggle"></label>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <ul id="nav-menu">
          <li class="nav-it">SCHEDULE</li>
          <li class="nav-it">EVENTS</li>
          <li class="nav-it">SPONSORS</li>
          <li class="nav-it">CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
