import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Home from '../pages/Home';
import About from '../pages/About';
import Schedules from '../pages/Schedules';

import '../styles/MainNavbar.css';

// router dependencies
import { Route, Link, Routes, Outlet } from 'react-router-dom';

function MainNavbar() {
  return (
<div>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">broxworx.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ></Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <NavDropdown title="Schedules" href="/schedules" id="basic-nav-dropdown">
                <NavDropdown title="Basketball" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/nba">NBA</NavDropdown.Item>
                    <NavDropdown.Item href="/wnba">WNBA</NavDropdown.Item>
                    <NavDropdown.Item href="/ncaab">NCAAB</NavDropdown.Item>
                    <NavDropdown.Item href="/ncaaw">NCAAW</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/nba" element={<Home/>}/>
          <Route path="/wnba" element={<Home/>}/>
          <Route path="/ncaab" element={<Home/>}/>
          <Route path="/ncaaw" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
    );
}

export default MainNavbar;