import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    return (
        <header className="Header">
            <div className="overlay">
                <h1>
                    Success Story
                </h1>
                <p>
                    Un jeu de rôle qui vous donne la possibilité d'avoir le succès que vous voulez.
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