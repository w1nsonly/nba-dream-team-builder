import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../css/AgeFilter.css";

function AgeFilter() {
    const [minAge, setMinAge] = useState<number | null>(null);
    const [maxAge, setMaxAge] = useState<number | null>(null);
    
    return (
        <div className="container">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Min age:</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Max age: </span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}


export default AgeFilter;