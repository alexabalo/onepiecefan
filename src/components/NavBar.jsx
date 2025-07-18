
import React from 'react';
import Logo from '../assets/OnePiece.png';
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import {Link, useNavigate, } from 'react-router-dom';
import {useAuth} from './AuthContext';

/*Cart*/
import {FaShoppingCart} from 'react-icons/fa';
import {useCart} from './CartContext';

const Navegacion = () => {
  const {user, logout} = useAuth();
  const {cartItems} = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };



    return (
      
      <Navbar  variant="dark" expand="lg"  className="position-absolute w-100 z-3 custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={Logo} alt='Logo' style={{ width: '100px', height: 'auto'}}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto gap-2">
              <Nav.Link as={Link} to="/" className='nav-btn-custom'>Home</Nav.Link>
              <Nav.Link as={Link} to="/Personajes" className='nav-btn-custom'>Personajes</Nav.Link>
              <Nav.Link as={Link} to="/Frutas" className='nav-btn-custom'>Frutas</Nav.Link>

              {/*Carrito*/}
              <Nav.Link as={Link} to='/carrito' className='postion-relative text-white'>
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {cartItems.length}
                </span>
              )}
              
              </Nav.Link>

              {!user && (
                <Nav.Link as={Link} to='Login' className='nav-btn-custom'>Login</Nav.Link>
              )}
              {user && (
                <> 

                <Nav.Link as={Link} to='/Dashboard' className='nav-btn-custom'>Inicio</Nav.Link>
                <Nav.Link as={Link} to='/Perfil' className='btn btn-warning rounded-pill text-danger'>Perfil</Nav.Link>
                <Navbar.Text className='text-white me-3'>
                  Usuario: <strong>{user}</strong>
                  </Navbar.Text>

                  

                  <Button variant='outline-light' onClick={handleLogout}>Cerrar Sesion</Button>
                
                </>
              )}
              </Nav>  
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navegacion;