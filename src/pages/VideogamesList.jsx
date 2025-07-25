import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext"
import VideogameCard from "../components/videogames/VideogameCard";

export default function VideogamesList() {
    const { videogames } = useContext(SearchContext);
    
    return <VideogameCard vglist={videogames} />;
}