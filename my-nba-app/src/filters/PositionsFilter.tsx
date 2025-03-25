import { useEffect, useState } from "react";
import axios from "axios";

interface PositionFilterProps {
    selectedPosition: string;
    onPositionChange: (pos: string) => void;
}

export function PositionFilter({selectedPosition, onPositionChange}: PositionFilterProps) {
    const [positions, setPositions] = useState<String[]>([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/positions")
            .then((response) => {
                setPositions(response.data);
            })
            .catch((error) => console.error("Error fetching positions:", error));
    }, []);


    return (
        <div>
            <label htmlFor="position-dropdown">Positions: </label>
            <select
                id="position-dropdown"
                value={selectedPosition}
                onChange={(e) => onPositionChange(e.target.value)}
            >
                <option value="">-- Select a Team --</option>
                {positions.map((position) => (
                    <option key={position.toString()} value={position.toString()}>
                        {position}
                    </option>
                ))}
            </select>
        </div> 
    );
}
