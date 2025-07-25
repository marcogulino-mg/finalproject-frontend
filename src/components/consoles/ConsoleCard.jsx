import { useNavigate } from "react-router-dom";

export default function ConsoleCard({cslist}) {
    const navigate = useNavigate();

    function details(console) {
        navigate(`/consoles/${console.slug}`);
    };
    
    return (
        <div className="container-xl d-flex justify-content-center vg-list-container mt-4">
            {cslist.map(console => (
                <div className="vg-list-wrapper" key={console.id}>
                    <div className="videogame-card">    
                        <img src={console.coverUrl} alt={`${console.consoleName} Cover`} className="top-image" />
                    </div>
                    <div className="bottom">
                        <div className="videogame-title">{console.consoleName}</div>
                        {<button type="button" onClick={() => details(console)} className="btn btn-primary">Information</button>}
                    </div>
                </div>
            ))}
        </div>
    );
}