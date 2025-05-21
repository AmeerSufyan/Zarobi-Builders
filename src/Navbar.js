import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navabr = () => {
    const [menuOpen, setMenuopen] = useState(false);

    return (
        <div className=' bg-black sticky top-0 z-50 text-white font-sans'>
        {/* Mobile menu toggle button */}
        <div className='lg:hidden absolute top-[-76px] px-2 py-1 text-lg right-10 bg-black text-white rounded-md'><button  onClick={() => setMenuopen(!menuOpen)}>{menuOpen ? <FaTimes/> : <FaBars/>}</button></div>
    <div className='hidden  lg:flex  justify-center gap-10 py-4 px-2 bg-black '>
        <NavLink exact to='/' activeClassName='text-blue-300'>Home</NavLink>
        <NavLink to='/residential' activeClassName='text-blue-300'>Residential Services</NavLink>
        <NavLink to="/commercial" activeClassName='text-blue-300'>Commercial Services</NavLink>
        <NavLink to="/projects" activeClassName='text-blue-300'>Projects</NavLink>
        <NavLink to="/aboutus" activeClassName='text-blue-300'>About Us</NavLink>
         <NavLink to="/blog" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Blog</NavLink>
        <NavLink to="/contactus" activeClassName='text-blue-300'>Contact Us</NavLink>
    </div>
    {menuOpen && (
        <div className={`lg:hidden  flex flex-col justify-center gap-2 py-2 lg:gap-10 ml-10 lg:font-semibold 
        mt-[-20px] lg:mt-[-20px] bg-black text-white font-sans`}>
        <NavLink exact to='/' activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Home</NavLink>
        <NavLink to='/residential' activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Residential Services</NavLink>
        <NavLink to="/commercial" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Commercial Services</NavLink>
        <NavLink to="/projects" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Projects</NavLink>
        <NavLink to="/aboutus" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>About Us</NavLink>
         <NavLink to="/blog" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Blog</NavLink>
        <NavLink to="/contactus" activeClassName='text-blue-300' onClick={() => setMenuopen(false)}>Contact Us</NavLink>
    </div>
    )}
    </div>
    )
}
export default Navabr 