import React from 'react';
import Logo from '../assets/OnePiece.png';
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const Navegacion = () => {

/* constante del use navigate */
const navigate = useNavigate();
const isAuth = localStorage.getItem('auth') === 'true';

const cerrarSesion = () => {
  localStorage.removeItem('auth');
  navigate('/login');
};


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

              {isAuth && (
                <>

                 <Nav.Link as={Link} to='/perfil/usuario123' className='btn btn-warning rounded-pill text-danger'>Perfil</Nav.Link>
                 <Nav.Link as={Link} to='/admin' className='btn btn-warning rounded-pill text-danger'>Admin</Nav.Link>
                </>
              )}

              </Nav>  

              <Nav>
                {!isAuth ? (
                    <Nav.Link as={Link} to='/Login' className='btn btn-warning rounded-pill text-danger'>Login</Nav.Link>
                ) : (
                  <Button variant='outline-light' onClick={cerrarSesion}>Cerrar Sesion</Button>
                  )}


              </Nav>

             
              
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Navegacion;