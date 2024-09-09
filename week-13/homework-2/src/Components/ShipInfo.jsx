import React from "react";
import { useNavigate, useParams } from "react-router-dom";


function ShipInfo({ ships }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const ship = ships.find((ship) => ship.url.split("/")[5] === id);

    if (!ship) {
        return <p>Ship not found</p>;
    }

    return (
        <div>
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <div className="container">
                <div className="ship-info-card">
                    <img src="./Images/ship.png" alt="ship"/>
                    <div className="ship-info-card-info">
                        <p className="shipInfo-h">Ship Name: <span className="shipInfo-s">{ship.name}</span></p>
                        <p className="shipInfo-h">Model: <span className="shipInfo-s">{ship.model}</span></p>
                        <p className="shipInfo-h">Manufacturer: <span className="shipInfo-s">{ship.manufacturer}</span></p>
                        <p className="shipInfo-h">Max atmospheric speed: <span className="shipInfo-s">{ship.max_atmosphering_speed}</span></p>
                        <p className="shipInfo-h">Crew: <span className="shipInfo-s">{ship.crew}</span></p>
                        <p className="shipInfo-h">Cargo capacity: <span className="shipInfo-s">{ship.cargo_capacity}</span></p>
                        <p className="shipInfo-h">Starship class: <span className="shipInfo-s">{ship.starship_class}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShipInfo;
