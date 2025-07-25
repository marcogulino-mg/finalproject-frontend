import { useNavigate } from "react-router-dom";

export default function VideogameCard({vglist}) {
    const navigate = useNavigate();

    function details(videogame) {
        navigate(`/videogames/${videogame.slug}`);
    };

    return (
        <div className="container-xl d-flex justify-content-center vg-list-container mt-4">
            {vglist.map(videogame => (
                <div className="vg-list-wrapper" key={videogame.id}>
                    <div className="videogame-card">    
                        <img src={videogame.coverUrl} alt={`${videogame.vgName} Cover`} className="top-image" />
                    </div>
                    <div className="bottom">
                        <div className="videogame-title">{videogame.vgName}</div>
                        {<button type="button" onClick={() => details(videogame)} className="btn btn-primary">Information</button>}
                    </div>
                </div>
            ))}
        </div>
    );
}