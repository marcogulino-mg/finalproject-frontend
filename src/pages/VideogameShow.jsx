import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import VideogameInfo from "../components/videogames/VideogameInfo";
export default function VideogameShow() {
  const { slug } = useParams();
  const location = useLocation();
  const [videogame, setVideogame] = useState(null);
  const navigate = useNavigate();

  // Debug logging
  console.log("slug:", slug);
  console.log("location.state:", location.state);

  // Axios call
  useEffect(() => {
    axios
      .get(`http://192.168.178.22:8080/api/videogames/slug/${slug}`)
      .then((res) => {
        setVideogame(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
        navigate("/404");
      });
  }, [slug]);

  return <VideogameInfo vg={videogame} />;
}
