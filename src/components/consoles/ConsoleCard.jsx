export default function VideogameCard({cslist}) {
    return (
        <div className="container-xl d-flex justify-content-center vg-list-container mt-4">
            {cslist.map(console => (
                <div className="vg-list-wrapper" key={console.id}>
                    <div className="videogame-card">    
                        <img src={console.coverUrl} alt={`${console.consoleName} Cover`} className="top-image" />
                    </div>
                    <div className="bottom">
                        <div className="videogame-title">{console.vgName}</div>
                        {/* <a href="#">View Videogame</a> */}
                        {<button type="button" className="btn btn-primary">Approfondisci</button>}
                    </div>
                </div>
            ))}
        </div>
    );
}