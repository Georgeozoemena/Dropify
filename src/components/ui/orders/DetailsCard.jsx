import React from "react";

export default function DetailsCard(props) {
    return(
        <div className="product-details-card">
            <h2 className="details-headline">{props.name}</h2>
        </div>
    )
}
