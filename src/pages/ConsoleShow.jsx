import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";

import ConsoleInfo from '../components/consoles/ConsoleInfo';
export default function ConsoleShow() {
    const { slug } = useParams();
    const location = useLocation();
    const id = location.state?.id;
    const [console, setConsole] = useState(null);

    // Axios call
    useEffect(() => {

        axios.get(`http://localhost:8080/api/consoles/slug/${slug}`)
            .then((res) => {
                setConsole(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [slug]);

    return <ConsoleInfo cs={console}/>;
}