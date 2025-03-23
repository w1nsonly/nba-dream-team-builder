import { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "../interfaces/Player";


  
export function TeamFilter() {
    const [teams, setTeams] = useState<String[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<string>("");
    const [players, setPlayers] = useState<Player[]>([]);


    useEffect(() => {
        axios.get("http://127.0.0.1:5000/teams")
            .then((response) => {
                console.log(typeof(response.data))
                setTeams(response.data);
            })
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    useEffect(() => {
        if (selectedTeam !== "") {
            axios.get(`http://127.0.0.1:5000/players/team?team=${selectedTeam}`)
                .then((response) => {
                    console.log("Raw response:", response.data);
                    console.log(typeof(response.data))
                    setPlayers(response.data);
                })
                .catch((error) => console.error("Error fetching players:", error));
        } else {
            setPlayers([]); // Clear players if no team selected
        }
    }, [selectedTeam]);
    

    return (
        <div>
            <label htmlFor="team-dropdown">Team: </label>
            <select
                id="team-dropdown"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
            >
                <option value="">-- Select a Team --</option>
                {teams.map((team) => (
                    <option key={team.toString()} value={team.toString()}>
                        {team}
                    </option>
                ))}
            </select>

            {players.length > 0 && (
                <div>
                    <h3>Players on {selectedTeam}</h3>
                    <ul>
                    {players.map((player, index) => (
                        <li key={index}>
                        <strong>{player.Player}</strong> - Age: {player.Age}, PTS: {player.PTS}, AST: {player.AST}, REB: {player.TRB}
                        </li>
                    ))}
                    </ul>
                </div>
            )}

        </div>
    );
}
