import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/home">
            <img
              src="logo.png"
              className="App-logo"
              style={{ width: "60px" }}
              alt="logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{ paddingRight: "50px" }}>
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
              <Link to="/parameters" className="nav-link">
                Diamond Parameters
              </Link>
              <Link to="/facet-master" className="nav-link">
                Facet Master
              </Link>
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </Nav>
            <Nav>
              <NavDropdown title="Mukesh Mishra" id="collasible-nav-dropdown">
                <Link to="/account-details" className="dropdown-item">
                  Account Details
                </Link>
                <Link to="/change-password" className="dropdown-item">
                  Change Password
                </Link>
                <NavDropdown.Divider />
                <Link to="/logout" className="dropdown-item">
                  Logout
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
