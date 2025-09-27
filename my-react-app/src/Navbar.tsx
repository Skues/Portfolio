import { useState } from "react";

function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
    function toggleHamburguer() {
        setIsOpen(!isOpen)

    }
    return (
        <nav className='navbar'>
            <div className="navbar-header">
                <div className='navbar-left'>
                    <p className="logo" style={{ fontWeight: "bold" }}>AWSkues</p>
                </div>
                <button className="hamburger" aria-label="Toggle Navigation" onClick={toggleHamburguer}>
                    ☰
                </button>
            </div>
            <div className={`navbar-right ${isOpen ? "open" : ""}`}>
                <ul className='navbar-links'>
                    <li>
                        <a className='hoverUnderline' href='/'>Home</a>
                    </li>
                    <li><a className='hoverUnderline' href='#projectAnchor'>Projects</a></li>
                    <li><a className='hoverUnderline' href='#todoDiv'>WIP</a></li>
                    <li><a className='hoverUnderline' href='#connectAnchor'>Connect</a></li>
                </ul>

            </div>
        </nav>

    )
}
export default Navbar;
