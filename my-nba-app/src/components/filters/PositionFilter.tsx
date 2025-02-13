import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function PositionFilter() {
    const [activePosition, setActivePosition] = useState<string | null>(null);

    const items = ["PG", "SG", "SF", "PF", "C"];

    return (
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">{activePosition ? `Position: ${activePosition}` : "Select Position"} {/* Show selected */}</button>

                <ul className="dropdown-menu">
                    {/* Default Reset Option */}
                    <li>
                        <button className={`dropdown-item ${activePosition === null ? "active" : ""}`} onClick={() => setActivePosition(null)} >Select Position</button>
                    </li>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button className={`dropdown-item ${activePosition === item ? "active" : ""}`} onClick={() => setActivePosition(item)} >{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
    );
}

export default PositionFilter;
