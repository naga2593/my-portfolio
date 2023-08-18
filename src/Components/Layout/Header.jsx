import React from 'react'
import { Link } from 'react-router-dom';

 const Header = () => {
  return (
    <>
    <ul className='head'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    </>
  )
}
export default Header;
