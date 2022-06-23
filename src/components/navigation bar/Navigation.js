import React from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    return (
        <>
            <nav>
                <ul id="navigation">

                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                </ul>
            </nav>
        </>
    );
}

export default Navigation;
