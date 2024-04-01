import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import './style/navbar.css';
const Navbar =()=> {
    const links =[
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Recipes",
        path: "/recipes",
    },
    {
        name: "Settings",
        path: "/settings",
    },
    {
        name: "Sign Up",
        path: "/signup",
    },{
        name: "Log In",
        path: "/login",
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