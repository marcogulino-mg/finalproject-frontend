import { Link } from "react-router-dom";

export default function ConsoleInfo({ cs }) {
    return (
    <div className="container">
        <div className="row column-gap-5 text-start">
            <div className="col-8 card">
                <div className="card-header">
                    <h2>{cs?.consoleName || "Loading..."}</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{cs?.description || "Loading..."}</p>
                    <Link to="/consoles">
                        <button className="btn btn-primary">Go Back</button>
                    </Link>
                </div>
            </div>
            <div className="col card">
                <img src={cs?.coverUrl || "Loading..."} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Additional Info</h5>
                    <p className="card-text"><span className="fs-6 fw-bold">Publisher:</span> {cs?.publisher || "Loading..."}</p>
                    <p className="card-text"><span className="fs-6 fw-bold">Release Date:</span> {cs?.releaseDate || "Loading..."}</p>
                    {/* <div className="card-text"><span className="fs-6 fw-bold">This game also exists on:</span>
                        <ul className="d-flex list-unstyled gap-2 mt-2 mb-0 flex-wrap">
                            {vg?.consoles?.map((console) => (
                                <Link to="/videogames">
                                    <li key={console.id}><img className="cs-icon" src={console.smallIconUrl} alt={console.consoleName} /></li>
                                </Link>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    );
}