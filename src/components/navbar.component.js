import '../App.css';
import { Link } from 'react-router-dom'
import React from 'react';

function Navbar() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Feedback Analysis System</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to="/dashboard">
                    <li>Dashboard</li>
                </Link>

            </ul>
        </nav>

    );
}

export default Navbar;
