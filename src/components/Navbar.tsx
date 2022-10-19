import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { logo } from "../assets";

const pages = [
  "Home",
  "Sobre",
  "Clinica",
  "Tratamentos",
  "Cursos",
  "Videos",
  "Contato",
];
const NavbarComponent = () => {
  return (
    <>
      <Navbar
        bg="transparent"
        variant="dark"
        fixed="top"
        style={{ width: "100%" }}
      >
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <Image src={logo} style={{ width: "50px" }} />
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {pages.map((page) => (
              <>
                <Link to={`./${page}`}>
                  <Nav.Link key={page} href={`./${page}`}>
                    {page}
                  </Nav.Link>
                </Link>
              </>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
