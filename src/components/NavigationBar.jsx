import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const NavigationBar = () => {
  return (
    <div style={{ marginBottom: "75px" }}>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <picture>
            <source type="image/webp" srcSet={require("../../static/logo-navbar-white.png")} style={{ marginRight: 15, height: "48px", width: "50px" }} />
            <img src={require("../../static/logo-navbar-white.png")} alt="The Golden Hurricast logo" style={{ marginRight: 15, height: "48px", width: "50px" }} />
          </picture>
          The Golden Hurricast
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="../podcast">Podcast</Nav.Link>
            <Nav.Link href="../blog">Blog</Nav.Link>
            <Nav.Link href="../about">About Us</Nav.Link>
            <Nav.Link href="../support">Support Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar