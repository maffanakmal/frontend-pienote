import '../assets/Css/NavBar-Footer.css';
import { React, useState, useEffect } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import navLogo from '../assets/Image/pienotes-logomark-w.png';
import NewsPage from '../pages/News';
import LoginModal from './LoginModal';

const NavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundColor);
        return () => {
            window.removeEventListener('scroll', changeBackgroundColor);
        };
    }, []);

    const isHomePage = location.pathname === '/';

    return (
        <Navbar id='navbar' expand="lg" className={changeColor ? "nav-active" : ""}>
            <Container>
                <Navbar.Brand className='fs-3 fw-bold'>
                    <NavLink to="/"><img src={navLogo} alt="PieNote" width='36px' /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <div className='nav-link'>
                            {isHomePage ? (
                                <Link
                                    to='home'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="active"
                                >
                                    Home
                                </Link>
                            ) : (
                                <NavLink to="/">Home</NavLink>
                            )}
                            <NavLink to='/news'>
                                News
                            </NavLink>
                            {isHomePage ? (
                                <Link
                                    to='about'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="active"
                                >
                                    About
                                </Link>
                            ) : (
                                <NavLink to="/">About</NavLink>
                            )}
                            <NavLink
                                onClick={() => setShow(true)}
                            >
                                Contact
                            </NavLink>
                        </div>
                        <LoginModal show={show} setShow={setShow} />
                    </Nav>
                    <div className='btn-signin'>
                        <NavLink className='btn-nav-login' to='/login'>Login</NavLink>
                        <NavLink className='btn-nav-register' to='/register'>Sign Up <i className="fa-solid fa-angle-right"></i></NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
