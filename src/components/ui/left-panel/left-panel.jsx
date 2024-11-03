import React from "react";
import CustomButton from "../Button/Button";
import ButtonDetails from "../Button/Btn-Components";

function createButton(ButtonDetails){
    return <CustomButton 
                name={ButtonDetails.name} 
                id={ButtonDetails.id} 
                key={ButtonDetails.name}
            />
}

export default function LeftPanel() {
    return(
        <div className="left-panel-section">
            <div className="menu-section1">
                <div className="logo">Dropify</div>
                <div className="menu">
                    {ButtonDetails.map(createButton)}
                </div>
            </div>
            <div className="profile-section">
                <div className="profile-photo"></div>
                <div className="bio">
                    <h2 className="username">George Ozoemena</h2>
                    <p className="location">Wuse Zone 2, Abuja</p>
                </div>
            </div>
        </div>
    )
}