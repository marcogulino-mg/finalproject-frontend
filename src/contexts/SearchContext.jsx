import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [videogames, setVideogames] = useState([]);
    const [consoles, setConsoles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // If searchQuery is empty then get videogames complete list
        const vgUrl = searchQuery
            ? `http://localhost:8080/api/videogames/search?vgName=${searchQuery}`
            : `http://localhost:8080/api/videogames`;

        // If searchQuery is empty then get consoles complete list
        const consoleUrl = searchQuery
            ? `http://localhost:8080/api/consoles/search?consoleName=${searchQuery}`
            : `http://localhost:8080/api/consoles`;

        axios.get(vgUrl)
            .then(res => {
                setVideogames(res.data);
            })
            .catch(err => {
                console.error("Cannot get videogames:", err);
            });

        axios.get(consoleUrl)
            .then(res => {
                setConsoles(res.data);
            })
            .catch(err => {
                console.error("Cannot get consoles:", err);
            });

    }, [searchQuery]);

    return (
        <SearchContext.Provider value={{ videogames, consoles, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
}