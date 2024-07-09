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
          <Navbar.Brand as={Link} to="/">broxworx-nextevent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ></Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/schedules">Selections</Nav.Link>
              <NavDropdown title="Schedules" id="basic-nav-dropdown">
                <NavDropdown title="Basketball" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/nba">NBA</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/wnba">WNBA</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaab">NCAAB</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaaw">NCAAW</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Football" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/nfl">NFL</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaaf">NCAAF</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Baseball" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/mlb">MLB</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaa-baseball">NCAA Baseball</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Golf" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/pga">PGA</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaag">NCAAG</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/liv">LIV</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Hockey" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/nhl">NHL</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/ncaah">NCAAH</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Motorsport" id="basic-nav-dropdown">
                  {/* check motorsport.com for better categories */}
                  <NavDropdown title="Open-Wheel" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/f1">Formula 1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/f2">Formula 2</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/f3">Formula 3</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/f1a">Formula 1 Academy</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/indycar">Indycar</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/indynxt">Indy NXT</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Endurance" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/wec">WEC</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/imsa">IMSA</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/gtw">GT World Challenge</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Stock Car" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/nascar-cup">NASCAR Cup</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/nascar-jr">NASCAR Xfinity</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/nascar-truck">NASCAR Truck Series</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown title="Combat" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} href="/ufc">UFC</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/boxing">Boxing</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">Signup/Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          { /* Site Nav */ }
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<About/>}/>
          <Route path="/admin" element={<About/>}/>
          <Route path="/schedules" element={<Schedules/>}/>
          
          { /* Schedule Routing */ }
          <Route path="/nba" element={<Home/>}/>
          <Route path="/wnba" element={<Home/>}/>
          <Route path="/ncaab" element={<Home/>}/>
          <Route path="/ncaaw" element={<Home/>}/>
          <Route path="/nfl" element={<Home/>}/>
          <Route path="/ncaaf" element={<Home/>}/>
          <Route path="/mlb" element={<Home/>}/>
          <Route path="/ncaa-baseball" element={<Home/>}/>
          <Route path="/pga" element={<Home/>}/>
          <Route path="/ncaag" element={<Home/>}/>
          <Route path="/liv" element={<Home/>}/>
          <Route path="/nhl" element={<Home/>}/>
          <Route path="/ncaah" element={<Home/>}/>
          <Route path="/ufc" element={<Home/>}/>
          <Route path="/boxing" element={<Home/>}/>


          { /* Motorsport Routing */}
          <Route path="/f1" element={<Home/>}/>
          <Route path="/f2" element={<Home/>}/>
          <Route path="/f3" element={<Home/>}/>
          <Route path="/f1a" element={<Home/>}/>
          <Route path="/indycar" element={<Home/>}/>
          <Route path="/indynxt" element={<Home/>}/>
          <Route path="/wec" element={<Home/>}/>
          <Route path="/imsa" element={<Home/>}/>
          <Route path="/gtw" element={<Home/>}/>
          <Route path="/nascar-cup" element={<Home/>}/>
          <Route path="/nascar-jr" element={<Home/>}/>
          <Route path="/nascar-truck" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
    );
}

export default MainNavbar;