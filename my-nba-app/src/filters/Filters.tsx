import { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "../interfaces/Player";

import { PositionFilter } from "./PositionsFilter";
import { TeamFilter } from "./TeamFilter";
import { AgeFilter } from "./AgeFilter";


export function Filters() {
    const [selectedTeam, setSelectedTeam] = useState("")
    const [selectedPosition, setSelectedPosition] = useState("")
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {

        let query = "http://127.0.0.1:5000/players?";
        const params: string[] = [];

        if (selectedTeam) {
            params.push(`team=${selectedTeam}`);
        }
        if (selectedPosition) {
            params.push(`pos=${selectedPosition}`);
        }
        if (params.length > 0) {
            query += params.join("&")
        }

        if (params.length > 0) {
            axios.get(query)
                .then ((response) => {
                    setPlayers(response.data);
                })
                .catch((error) => console.error("Error fetching players: ", error));
        } else {
            setPlayers([]);
        }
    }, [selectedTeam, selectedPosition]);

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <TeamFilter 
                    selectedTeam={selectedTeam}
                    onTeamChange={setSelectedTeam}
                />
                <PositionFilter 
                    selectedPosition={selectedPosition}
                    onPositionChange={setSelectedPosition}
                />
                
            </div>      

            <div>
                <h3>Players</h3>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>
                            <strong>{player.Player}</strong> - {player.Team} - Age: {player.Age}, PTS: {player.PTS}, AST: {player.AST}, REB: {player.TRB}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}