import React from 'react';
import Logo from '../assets/OnePiece.png';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navegacion = () => {
    return (
      <Navbar  variant="dark" expand="lg"  className="position-absolute w-100 z-3 bg-transparent">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={Logo} alt='Logo' style={{ width: '100px', height: 'auto'}}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className='btn btn-warning rounded-pill text-danger'>Home</Nav.Link>
              <Nav.Link as={Link} to="/Personajes" className='btn btn-warning rounded-pill text-danger'>Personajes</Nav.Link>
              <Nav.Link as={Link} to="/Frutas" className='btn btn-warning rounded-pill text-danger'>Frutas</Nav.Link>
              <Nav.Link as={Link} to='/Contact' className='btn btn-warning rounded-pill text-danger'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;