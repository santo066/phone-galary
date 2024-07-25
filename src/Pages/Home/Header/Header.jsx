import { Link } from "react-router-dom"
import "./style-header.css"

export default function Header() {
    const navlist = <>
        <Link><li className="mr-3"><a>Home</a></li></Link>
        <Link><li className="mr-3"><a>About</a></li></Link>
        <Link><li className="mr-3"><a>All Phones</a></li></Link>
        <Link><li className="mr-3"><a>Contact</a></li></Link>
        <Link><li><a>Add Phone</a></li></Link>
    </>
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand mr-32" href="#">PHONE GALARY</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        navlist
                    }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}