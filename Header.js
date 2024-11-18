import React from "react";

export default function Head() {
    return (
        <header>
            <nav className="nav">
                <img src="./react logo.jpeg" className="nav-logo" alt="logo" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
