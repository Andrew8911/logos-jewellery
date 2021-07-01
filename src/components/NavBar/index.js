import React from 'react';
import {Link} from 'react-router-dom'
import "./style.css";

const NavBar = () => {
    return (  
        <div className="navbar">
            <h1>Logos Jewellery</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    );
}
 
export default NavBar;

