export default function VideogameCard({vglist}) {
    return (
        <div className="container-xl d-flex justify-content-center vg-list-container mt-4">
            {vglist.map(videogame => (
                <div className="vg-list-wrapper" key={videogame.id}>
                    <div className="videogame-card">    
                        <img src={videogame.coverUrl} alt={`${videogame.vgName} Cover`} className="top-image" />
                    </div>
                    <div className="bottom">
                        <div className="videogame-title">{videogame.vgName}</div>
                        <a href="#">View Videogame</a>
                    </div>
                </div>
            ))}
        </div>
    );
}