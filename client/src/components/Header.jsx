import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "./animeicon.png"

function Header() {
  return (
    <header>

        <Link to="/" className='logo'>
            <img src={logo} alt='ReactJS' style={{width:"50px", height: "50px", borderRadius:"50%", backgroundColor:"violet", objectFit:"cover"}} /> AniMan Tracker
        </Link>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>

    </header>
  )
}

export default Header