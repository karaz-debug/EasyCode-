import React from 'react'
import './Header.css'

function Header() {
  return (
    <div class="navbar ">
      <div class="container flex container-snap">
        <h1 class="logo">EasyCode 💥</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;
