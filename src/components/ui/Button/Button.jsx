import React from "react";

export default function CustomButton (props) {
    return (
        <button>
            <div className="btn-container">
                {/* <img src={props.icon} alt="" /> */}
                {props.name}
            </div>
        </button>
    )
}