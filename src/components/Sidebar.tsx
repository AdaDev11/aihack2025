import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">AIPlants</div>
            <ul className="menu">
                <li className="active">
                    <span className="icon">🌱</span> Dashboard
                </li>
                <Link>
                    to={"/" + history}
                    <span className="icon">⏱️</span> History
                </Link>

                <li>
                    <span className="icon">⚙️</span> Settings
                </li>
            </ul>
            <div className="bottom-actions">
                <button className="logout">
                    <span className="icon">➡️</span> Logout
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
