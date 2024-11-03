import React from "react";

export default function AnalysisCard(props) {
    return(
        <div className="analysis-card">
            <div className="analysis-text-section">
                <h2>{props.headline}</h2>
                <div className="analysis">
                    <div className="analysis-icon"></div>
                    <p>{props.stats}</p>
                </div>
            </div>
            <div className="analysis-img-svg"></div>
        </div>
    )
}