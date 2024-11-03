import React from "react";
import PeriodicAnalysis from "./Periodic-analysis-card";
import ProductInfo from "./ProductInfo";

export default function Card(){
    return (
        <div className="cards-container">
            <PeriodicAnalysis />
            <ProductInfo />
        </div>
    )
}