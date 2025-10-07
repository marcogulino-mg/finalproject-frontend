import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import ConsoleInfo from "../components/consoles/ConsoleInfo";
export default function ConsoleShow() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [console, setConsole] = useState(null);

  // Axios call
  useEffect(() => {
    axios
      .get(`http://192.168.178.22:8080/api/consoles/slug/${slug}`)
      .then((res) => {
        setConsole(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
        navigate("/404");
      });
  }, [slug]);

  return <ConsoleInfo cs={console} />;
}
