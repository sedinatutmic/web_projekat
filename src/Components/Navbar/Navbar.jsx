import React from 'react'
import './navbar.css'
import {MdModeOfTravel} from 'react-icons/md';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  return (
   <section className='navBarsection'>
    <div className="header">
      <div className="logoDiv">
        <a href="#" className="logo">
          <h1 className="Flex"><MdModeOfTravel className="icon"/> ExploreBosnia
          </h1>
        </a>
      </div>
<div className="navBar">
  <ul className="navlists flex">
<li className="navItem">
  <a href="#" className="navLink">Home</a>

</li>
<li className="navItem">
  <a href="#" className="navLink">About</a>
  
</li>
<li className="navItem">
  <a href="#" className="navLink">Contact</a>
  
</li>
<li className="navItem">
  <a href="#" className="navLink">Blog</a>
  
</li>
<li className="navItem">
  <a href="#" className="navLink">Resources</a>
  
</li>
<div className="hedaerBtns flex">
  <button className="btn loginBtn">
    <a href="#">Login</a>
  </button>
  <button className="btn">
    <a href="#">Sign in</a>
  </button>
</div>
  </ul>
<div className="closeNavbar">
< AiFillCloseCircle className="icon"/>
</div>
</div>
<div className="toggleNavbar">
<TbGridDots className="icon"/>
</div>
    </div>

   </section>
  )
}

export default Navbar