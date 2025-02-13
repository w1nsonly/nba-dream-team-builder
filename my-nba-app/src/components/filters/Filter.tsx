import React from "react";
import PositionFilter from "./PositionFilter";
import TeamFilter from "./TeamFilter";
import AgeFilter from "./AgeFilter";

function Filter() {
    return (
        <>
            <h3 className="text-center mt-3">Filters</h3>
            <div className="d-flex justify-content-start align-items-center mt-3 gap-4 ms-5">
                <PositionFilter />
                <TeamFilter />
                <AgeFilter />
            </div>
        </>
    );
}

export default Filter;

