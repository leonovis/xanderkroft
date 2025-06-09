import { Link } from "react-router-dom";
// import logo1 from "/assets/images/logo-1.png"

const HeaderMenu = () => {
    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link to="/" className="logo">
                            {/* <img src={logo1} alt="logo" /> */}
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link to="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact <span /></Link>
                                </li>
                                <li className="dropdown-menu-item">
                                    <Link to="#">All Pages <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us <span /></Link></li>
                                        <li><Link to="/team-details/1">Team</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <a className="with-border" href="tel:+2347059741489">(+234) 7059741489</a>
                            <a href="mailto:contact@xanderkroft.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;