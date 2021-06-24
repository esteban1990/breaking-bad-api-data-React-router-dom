import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Breaking Bad</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                        <Link class="navbar-brand" to="/">
                            <a class="nav-link" href="#">Home</a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="navbar-brand" to="/characters">
                            <a class="nav-link" href="#">Characters</a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="navbar-brand" to="/episodes">
                            <a class="nav-link" href="#">Episodes</a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="navbar-brand" to="/quotes">
                            <a class="nav-link" href="#">Quotes</a>
                        </Link>
                    </li>
                
                </ul>
            </div>
        </nav>

    )
}
