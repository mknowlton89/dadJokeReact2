import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles.css';


export function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <Link to="/">
                    <p className="nav-logo">Dad Joke Generator</p>
                </Link>

                <ul>
                    <li>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <p>Favorites</p>
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
