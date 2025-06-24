import {useAuth} from './AuthContext';
import {Link, useNavigate } from 'react-router-dom';
import { Container, Button, Card, Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/OnePiece.png';

export default function Dashboard() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    };

     return (
    <>
      <Navbar variant='dark' expand='lg' className='position-absolute w-100 z-3 bg-transparent'>
        <Container>
          <Navbar.Brand as={Link} to='/'><img src={Logo} alt='logo' style={{width: '100px', height: 'auto'}}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Perfil</Nav.Link>
            </Nav>
            <Navbar.Text className="me-3">
              Usuario: <strong>{user}</strong>
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </>
  );
}