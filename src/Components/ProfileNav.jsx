import '../assets/Css/NavBar-Footer.css'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { navLinks } from '../assets/Js/index'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import axios from 'axios'
import navLogo from '../assets/Image/pienotes-logomark-w.png'
import profileImg from '../assets/Image/people-1.webp'

const ProfileNavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundColor);
        return () => {
            window.removeEventListener('scroll', changeBackgroundColor);
        }
    }, []);

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.delete('http://localhost:8000/logout');
            // Clear token or any auth state if needed
            localStorage.removeItem('token'); // Example if using localStorage
            navigate('/');
        } catch (err) {
            console.error('Logout error:', err);
        }
    }

    return (
        <Navbar id='navbar' expand="lg" className={changeColor ? "nav-active" : ""}>
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-bold'>
                    <NavLink to='/'><img src={navLogo} alt="PieNote" width='36px' /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navLinks.map((getLinkData) => (
                            <div className='nav-link' key={getLinkData.id}>
                                <Link
                                    to={getLinkData.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjusted offset for better scroll positioning
                                    duration={500} // Adjusted duration for smoother scrolling
                                    activeClass="active" // Class to apply when the link is active
                                >
                                    {getLinkData.text}
                                </Link>
                            </div>
                        ))}
                    </Nav>
                    <div className='notification-icon d-flex aiign-items-center justify-content-center mx-3'>
                        <NavLink><i class="fa-solid fa-bell"></i></NavLink>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle className='nav-dropdown'>
                            <img src={profileImg} alt=""/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><i className="fa-solid fa-id-card"></i> See Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i className="fa-solid fa-gear"></i> Settings</Dropdown.Item>
                            <Dropdown.Item onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ProfileNavbarComp;
