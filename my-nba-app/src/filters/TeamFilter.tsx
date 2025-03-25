import { useEffect, useState } from "react";
import axios from "axios";

interface TeamFilterProps {
    selectedTeam: string;
    onTeamChange: (team: string) => void;
}

export function TeamFilter({selectedTeam, onTeamChange}: TeamFilterProps) {
    const [teams, setTeams] = useState<String[]>([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/teams")
            .then((response) => {
                console.log(typeof(response.data))
                setTeams(response.data);
            })
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    
    return (
        <div>
            <label htmlFor="team-dropdown">Team: </label>
            <select
                id="team-dropdown"
                value={selectedTeam}
                onChange={(e) => onTeamChange(e.target.value)}
            >
                <option value="">-- Select a Team --</option>
                {teams.map((team) => (
                    <option key={team.toString()} value={team.toString()}>
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
}
