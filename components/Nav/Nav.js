import Link from "next/link";

function Nav() {
    return (
    <nav className="navbar navbar bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand mb-0 h1" href="/cats">Navbar</Link>
    </div>
    </nav>

      );
}

export default Nav;