import React from "react";
import Card from "./Card";
import Navbar from "../Navigation-bar/Nav-bar";

export default function Orders() {
    return (
        <div className="orders-page">
            <div className="orders-contain">
                <Navbar />
                <Card />
            </div>
        </div>
    )
}