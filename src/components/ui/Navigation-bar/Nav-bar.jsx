import React from "react";
import CustomButton from "../Button/Button";



export default function Navbar() {
    return (
        <div className="nav-bar-section">
            <div className="nav-bar-container">
                <div className="welcome-user">
                    <h2>Welcome back, George!</h2>
                    <p>You have pending orders</p>
                </div>
                <div className="nav-bar-actions">
                    <div className="action-icons-container">
                        <div className="notifications"></div>
                        <div className="search"></div>
                        <div className="message"></div>
                    </div>
                    <CustomButton name="Create new order" />
                </div>
            </div>
        </div>
    )
}