import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import { navLinks } from '../assets/index'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import navLogo from '../assets/img/pienotes-logomark-w.png'
import profileImg from '../assets/img/testimonial/people-1.webp'

const ProfileNavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false)
    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundColor)
        return () => {
            window.removeEventListener('scroll', changeBackgroundColor)
        }
    }, [])

    return (
        <Navbar expand="lg" className={changeColor ? "nav-active" : ""}>
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
                    <Dropdown>
                        <Dropdown.Toggle className='nav-dropdown'>
                            <img src={profileImg} alt=""/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><i class="fa-solid fa-id-card"></i> See Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i class="fa-solid fa-gear"></i> Settings</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ProfileNavbarComp
