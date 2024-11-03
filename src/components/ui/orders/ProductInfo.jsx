import React from "react";
import DetailsCard from "./DetailsCard";
import cardDetails from "./CardComponents";

function createProductCard(cardDetails){
    return(<DetailsCard name="Package Details"/>)
}

export default function ProductInfo() {
    return(
        <div className="product-details-section">
            <div className="detail-section1">
                <DetailsCard name="Package Details"/>
                <DetailsCard name="Speed Statistics"/>
                {/* {cardDetails.map(createProductCard)} */}
            </div>
            <div className="detail-section2">
                <DetailsCard name="Order Info"/>
                <DetailsCard name="Wheeled Robot Trailer"/>
            </div>
            <div className="detail-section3">
                <div className="product-details-card">
                    <h2 className="details-headline">Map location</h2>
                </div>
                {/* <DetailsCard name="Map Location"/> */}
            </div>
        </div>
    )
}