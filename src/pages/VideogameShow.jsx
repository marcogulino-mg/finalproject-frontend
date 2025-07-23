import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";

import VideogameInfo from '../components/videogames/VideogameInfo';
export default function VideogameShow() {
    const { slug } = useParams();
    const location = useLocation();
    const id = location.state?.id;
    const [videogame, setVideogame] = useState(null);

    // Debug logging
    console.log('slug:', slug);
    console.log('location.state:', location.state);
    console.log('id:', id);

    // Axios call
    useEffect(() => {

        axios.get(`http://localhost:8080/api/videogames/${id}`)
            .then((res) => {
                setVideogame(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    // Add this to see when the state actually updates
    console.log('Current videogame state:', videogame);

    return <VideogameInfo vg={videogame}/>;
}