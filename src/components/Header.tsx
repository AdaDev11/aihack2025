import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="title">Plant Assistant</div>
            <ul className="tabs">
                <li className="active">Chat</li>
                <li>Data</li>
                <li>Charts</li>
            </ul>
        </div>
    );
}

export default Header;
