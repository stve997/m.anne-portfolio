import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logos/mary-anne-new.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


function SideNav() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {/* <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/maryanne-mwangi-59779a19a/"><img src={navIcon1} alt="" /></a>
                <a href="https://instagram.com/m_.m_designs_?igshid=NzZIODBkYWE4Ng=="><img src={navIcon3} alt="" /></a>
            </div>
          </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SideNav;
