
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <p style={{ fontWeight: "bold" }}>AWSkues</p>
            </div>
            <div className='navbar-right'>
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
