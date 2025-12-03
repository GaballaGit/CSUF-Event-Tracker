import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div id="navbar">
            <h1>CSUF Event Tracker</h1>
            <div id="navlinks">
                <nav>
                    <Link to="/"><h2>Dashboard</h2></Link>
                    <Link to="/find"><h2>Find Event</h2></Link>
                </nav>
            </div>
        </div>
    )
}