import React from "react";
import AnalysisCard from "./AnalysisCard";

export default function PeriodicAnalysis() {
    return(
        <div className="periodic-analysis-section">
            <AnalysisCard headline="This month's order" stats="132" />
            <AnalysisCard headline="Average weight" stats="32lbs"/>
            <AnalysisCard headline="Average distance" stats="872mi"/>
        </div>
    )
}