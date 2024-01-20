import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            </div>
    )
}

export default Navbar