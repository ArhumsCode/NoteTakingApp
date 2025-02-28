function Header(props) {
    return (
        <header className="header">
            <nav className="header__links header__links--left">
                <a href="/">Home</a> |
                <a href="/">About</a> |
                <a href="/">Contact</a>
            </nav>
            <div className="header__logo">
                <img className="header__logo_image" src="notebook.png" alt='my-image'/>
                <h3 className='header__logo_title'>Arhum's Note Taking App</h3>
                <img className="header__logo_image" src="notebook.png" alt='my-image'/>
            </div>
            <div className="header__links header__links--right">
                <input className="search" placeholder="Search..." />
                <p className="lastPressed"></p>
            </div>
        </header>
    );
}

export default Header;