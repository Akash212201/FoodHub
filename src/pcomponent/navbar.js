import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import './style/navbar.css';
import {faHome,faList, faCog, faSignIn, faUserAlt} from '@fortawesome/free-solid-svg-icons';
const Navbar =()=> {
    const links =[
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Recipes",
        path: "/recipes",
        icon: faList
    },
    {
        name: "Settings",
        path: "/settings",
        icon: faCog
    },
    {
        name: "Sign Up",
        path: "/signup",
        icon: faUserAlt
    },{
        name: "Log In",
        path: "/login",
        icon: faSignIn
    }]
    const [showsideBar, setsideBar]= useState(false);
    const hideSidebar=()=>{
        setsideBar(false);
    }
  return (
    <>
    <div className="navbar container">
        <Link to="/" className='logo'>F<span>oo</span>dHub</Link>
        <div className="nav-links">
            {
                links.map(link =>(
                    <Link to={link.path} key={link.name}>{link.name}</Link>
                ))
            }
        </div>
        <div onClick={()=>setsideBar(!showsideBar)} className="sidebar-btn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    {showsideBar && <Sidebar links={links} hideSidebar={hideSidebar} />}
    </>
  )
}

export default Navbar;