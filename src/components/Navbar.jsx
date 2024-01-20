import { Link } from "react-router-dom"

function Navbar() {
    return (
    
        <nav>
            <h1>Tiffani Underwood</h1>
            <ul className="navlink">
                <li>
            <Link to="/" className="navigation">About Me</Link>
                </li>
                <li>   
            <Link to="/contact" className="navigation">Contact</Link>
                </li>
                <li>
            <Link to="/portfolio" className="navigation">Portfolio</Link>
                </li>
                <li>
            <Link to="/resume" className="navigation">Resume</Link>
                </li>
            </ul>
            </nav>
    )
}

export default Navbar