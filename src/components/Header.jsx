export default function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3">
            <figure>
                <img src="/logov2.png" alt="logo"/>
            </figure>
            <nav className="menu">
                <ul className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Videogames</a></li>
                    <li><a href="#">Consoles</a></li>
                </ul>
            </nav>
            <div className="searchbar">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}