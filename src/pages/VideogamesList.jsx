import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import VideogameCard from "../components/videogames/VideogameCard";

export default function VideogamesList() {
  const { videogames } = useContext(SearchContext);

  if (videogames.length <= 0) {
    return (
      <div className="container-xl d-flex justify-content-center vg-list-container mt-4">
        <h2>No video games match your search criteria</h2>
      </div>
    );
  }

  return <VideogameCard vglist={videogames} />;
}
