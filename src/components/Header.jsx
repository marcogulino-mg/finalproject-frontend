import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { SearchContext } from "../contexts/SearchContext";

export default function Header() {

    const { setSearchQuery } = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        setSearchQuery(searchValue);
    }
    
    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3">
            <figure>
                <img src="/logov2.png" alt="logo"/>
            </figure>
            <nav className="menu">
                <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li>
                        <Link to="/videogames">
                            Videogames
                        </Link>
                    </li>
                    <li>
                        <Link to="/consoles">
                            Consoles
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="searchbar">
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}