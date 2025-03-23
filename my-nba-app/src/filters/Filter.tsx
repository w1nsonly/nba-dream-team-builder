import { TeamFilter } from "./TeamFilter";
import { PositionFilter } from "./PositionsFilter";


export function Filter() {
    return (
        <>
            <h3>Filters</h3>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <TeamFilter />
                <PositionFilter />
            </div>
        </>
    );
}
