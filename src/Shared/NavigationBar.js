import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
   const menu = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/Appointment'}>Appointment</NavLink></li>
      <li><NavLink to={'/reviews'}>Reviews</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
      <li><NavLink to={'/Login'}>Login</NavLink></li>
   </>
   return (
      <div className="navbar bg-base-100" style={{ height: '64px' }}>
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menu}
               </ul>
            </div>
            <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</NavLink>
         </div>
         <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               {menu}
            </ul>
         </div>
      </div>
   );
};

export default NavigationBar;