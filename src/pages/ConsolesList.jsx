import axios from 'axios';
import { useEffect, useState } from 'react';

import ConsoleCard from '../components/consoles/ConsoleCard';
export default function ConsolesList() {
    // Arr of videogames
    const [consoles, setConsoles] = useState([]);

    // Axios call
    useEffect(() => {
    axios.get("http://localhost:8080/api/consoles")
      .then((res) => {
        setConsoles(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);

    return <ConsoleCard cslist={consoles}/>;
}