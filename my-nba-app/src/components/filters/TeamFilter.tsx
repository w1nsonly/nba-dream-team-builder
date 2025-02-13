import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function TeamFilter() {
    const [activeTeam, setActiveTeam] = useState<string | null>(null);
    
    const teams = [
        "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
        "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
        "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"
    ];

    return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">{activeTeam ? `Team: ${activeTeam}` : "Select Team"} {/* Show selected */}</button>

                <ul className="dropdown-menu">
                    {/* Default Reset Option */}
                    <li>
                        <button className={`dropdown-item ${activeTeam === null ? "active" : ""}`} onClick={() => setActiveTeam(null)} >Select Team</button>
                    </li>
                    {teams.map((item, index) => (
                        <li key={index}>
                            <button className={`dropdown-item ${activeTeam === item ? "active" : ""}`} onClick={() => setActiveTeam(item)} >{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
       
    );
}

export default TeamFilter;