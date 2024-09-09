import React from "react";
import { useNavigate } from "react-router-dom";

function Shipcard({ ship }) {
    const navigate = useNavigate();

    return (
        <>
        <div className="shipcard" onClick={() => navigate(`/ship/${ship.url.split("/")[5]}`)}>
            <img src="./Images/ship.png" alt="Starship" />
            <div className="shipname">
                <p className="shipcard-info-h">Ship Name: </p>
                <p className="shipcard-info">{ship.name}</p><br/>
                <p className="shipcard-info-h">Model:</p>
                <p className="shipcard-info">{ship.model}</p>
            </div>
        </div>
        </>
    );
}

export default Shipcard;
