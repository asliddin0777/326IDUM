import React from "react";
import Icon from "../../assets/images/logo.jpg";
import '../../styles/header.css'

const Header = () => {
    return (
        <nav>
            <div className="header">
                <div className="container">
                    <div className="headerMain">
                        <a href="/" className="headerImage">
                            <img src={Icon} alt="" />
                        </a>
                        <div className="headerWords">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/journal">Journal</a>
                                </li>
                                <li>
                                    <a href="/teacher">Teachers</a>
                                </li>
                                <li>
                                    <a href="/other">Others</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                                <li>
                                    <button>
                                        <a href="/">IDUM</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;