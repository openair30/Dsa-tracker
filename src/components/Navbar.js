import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ mode, setmode }) {
    const toggleMode = () => {
        setmode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="navbar">
            <div className="text-link">
                <Link to="/">DSA Tracker</Link>
            </div>
            <div className="controls">
                <button onClick={toggleMode} className="mode-toggle">
                    {mode === 'light' ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon icon={faSun} />
                    )}
                </button>
                <Link to="/login" className="login-button">Login</Link>
            </div>
        </div>
    );
}

export default Navbar;
