import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import home from "../../assets/icons/home.svg";
import about from "../../assets/icons/about.svg";
import NavBarCSS from "./NavBar.module.css";
import Button from "@mui/material/Button";

export const NavBar = () => {
    return (
      <Navbar expand="lg">
        <Container style={{textAlign: "center"}}>
          <Navbar.Brand href="#home">PH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <div className={NavBarCSS["nav-links"]}>
                  <img src={home} />
                  <span style={{ marginLeft: 3 }}>Home</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#about">
                <div className={NavBarCSS["nav-links"]}>
                  <img src={about} />
                  <span style={{ marginLeft: 3 }}>About</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#about">
                <span style={{ marginLeft: 3 }}>Projects</span>
              </Nav.Link>
              <span>
                <Button color="primary" variant="contained" disableRipple>
                  Let's connect
                </Button>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
