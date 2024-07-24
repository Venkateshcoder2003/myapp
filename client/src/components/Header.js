import React from 'react'

//importing Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpacing: "0.5px"
    }
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <div>
                        <h2 className='mt-2 h2_right' style={{ color: "#6c63ff" }}>
                            <NavLink to="/" className="text-decoration-none">Venkatesh M</NavLink>
                        </h2>
                    </div>

                    <Nav className="">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/About" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="/skills" className="text-decoration-none" style={common}>Skills</NavLink>
                            <NavLink to="/Playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/achievements" className="text-decoration-none" style={common}>Achievements</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
