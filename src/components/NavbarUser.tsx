import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavbarUser.css"


export default  function NavbarUser() {
  return (
    <Navbar expand="lg" className="Navbar"  variant='light'>
      <Container fluid>
        <Navbar.Brand href="/catalog">Каталог</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/catalog">Каталог</Nav.Link>
            <Nav.Link href="#action2">Акции</Nav.Link>
            <NavDropdown title="Категории" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Кошки</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Собаки</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Котята и щенки</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Другие питомцы
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Магазин
            </Nav.Link>
          </Nav>
          <Button variant="success" href='/login'>Войти</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

