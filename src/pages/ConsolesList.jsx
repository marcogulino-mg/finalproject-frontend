import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext"
import ConsoleCard from '../components/consoles/ConsoleCard';

export default function ConsolesList() {
    const { consoles } = useContext(SearchContext);

    if(consoles.length <= 0){
        return <div className="container-xl d-flex justify-content-center vg-list-container mt-4"><h2>No consoles match your search criteria</h2></div>
    }

    return <ConsoleCard cslist={consoles}/>;
}