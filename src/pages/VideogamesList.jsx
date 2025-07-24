import axios from 'axios';
import { useEffect, useState } from 'react';

import VideogameCard from '../components/videogames/videogameCard';
export default function VideogamesList() {
    // Arr of videogames
    const [videogames, setVideogames] = useState([]);

    // Axios call
    useEffect(() => {
    axios.get("http://localhost:8080/api/videogames")
      .then((res) => {
        setVideogames(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);

    return <VideogameCard vglist={videogames}/>;
}