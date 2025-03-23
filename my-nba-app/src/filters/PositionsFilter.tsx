import { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "../interfaces/Player";

export function PositionFilter() {
    const [positions, setPositions] = useState<String[]>([]);
    const [selectedPosition, setSelectedPosition] = useState<string>("");
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/positions")
            .then((response) => {
                setPositions(response.data);
            })
            .catch((error) => console.error("Error fetching positions:", error));
    }, []);

    useEffect(() => {
        if (selectedPosition !== "") {
            axios.get(`http://127.0.0.1:5000/players/position?pos=${selectedPosition}`)
                .then((response) => {
                    console.log("Raw response:", response.data);
                    console.log(typeof(response.data))
                    setPlayers(response.data);
                })
                .catch((error) => console.error("Error fetching players:", error));
        } else {
            setPlayers([]); // Clear players if no team selected
        }
    }, [selectedPosition]);

    return (
        <div>
            <label htmlFor="position-dropdown">Positions: </label>
            <select
                id="position-dropdown"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
            >
                <option value="">-- Select a Team --</option>
                {positions.map((position) => (
                    <option key={position.toString()} value={position.toString()}>
                        {position}
                    </option>
                ))}
            </select>

            {players.length > 0 && (
                <div>
                    <h3>Players on {selectedPosition}</h3>
                    <ul>
                    {players.map((player, index) => (
                        <li key={index}>
                        <strong>{player.Player}</strong> {player.Team} - Age: {player.Age}, PTS: {player.PTS}, AST: {player.AST}, REB: {player.TRB}
                        </li>
                    ))}
                    </ul>
                </div>
            )}

        </div>

        
    );
}
