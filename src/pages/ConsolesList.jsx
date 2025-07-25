import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext"
import ConsoleCard from '../components/consoles/ConsoleCard';

export default function ConsolesList() {
    const { consoles } = useContext(SearchContext);

    return <ConsoleCard cslist={consoles}/>;
}