import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    return (
        <header className="Header">
            <div class="overlay">
                <h1>
                    Success Story
                </h1>
                <p>
                    Success Story is an online game to grow up in the social world. Make the right choices and you will be the successfullest guy in the world.
                </p>
                <br />
                <Link to="/game">
                    <button>
                        Play Now
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;