import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
    <Navbar sticky="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          App Collections of Z
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/app1" >
              App1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/app2">
              App2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/app3">
              App3
            </Nav.Link>
            <Nav.Link as={NavLink} to="/app4">
              App4
            </Nav.Link>

            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/app5">
                App5
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <section
        style={{
          marginBottom: "50px",
        }}></section>
    <Outlet />
    </>
  );
}

export default Header;
