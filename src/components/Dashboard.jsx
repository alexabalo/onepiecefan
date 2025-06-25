
import { Container, Button, Card, Navbar, Nav } from 'react-bootstrap';
import  {useAuth} from './AuthContext';



export default function Dashboard() {
  const {user} = useAuth();
   
     return (
    <>
      <Container className='d-flex justify-content-center align-items-center vh-100'>
        <Card style={{ width: '30rem'}}>
          <Card.Body className='text-center'>
            <Card.Title>Dashboard</Card.Title>
            <Card.Text className='mb=4'>
              !Hola <strong>{user}</strong>, Bienvenido al panel !!!
            </Card.Text>

          </Card.Body> 
          </Card>

      </Container>
    
    </>
  );
}