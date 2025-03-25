import { useEffect, useState } from "react";
import axios from "axios";

interface AgeFilterProps {
    selectedMinAge: number;
    selectedMaxAge: number;
    onMinAgeChange: (age: number) => void;
    onMaxAgeChange: (age: number) => void;
}


export function AgeFilter({selectedMinAge, selectedMaxAge, onMinAgeChange, onMaxAgeChange}) {
    const [minAge, setMinAge] = useState<number | null>(null);
    const [maxAge, setMaxAge] = useState<number | null>(null);

    return (
        <div>
            <label htmlFor="min-age-input">E</label>
        </div>
    )
}