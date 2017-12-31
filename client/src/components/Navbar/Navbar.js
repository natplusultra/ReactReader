import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div className="navbar-fixed">
        <nav className="site-navbar">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo"><i className="material-icons left">collections_bookmark</i> NYT React Reader</Link>
                <ul className="right">
                    <li><Link to="/"><i className="material-icons left tiny">search</i> Search</Link></li>
                    <li><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Saved Articles</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar;