
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Frutas from './pages/Frutas'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';

{/*importando carrito*/}
import Carrito from './pages/Carrito'

/*prueba de los links*/

import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext';
import Dashboard from './components/Dashboard';


import RutaProtegida from './components/RutaProtegida';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import CargarBotonUser from './components/CargarBotonUser';
import { Container } from 'react-bootstrap';
import UserCard from './components/UserCard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Personajes" element={<Personajes />} />
            <Route path="/Frutas" element={<Frutas />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
           
      
            <Route
              path="/Dashboard"
              element={
                <RutaProtegida>
                  <Dashboard />
                </RutaProtegida>
              }
            />

            <Route path='/carrito' element={<Carrito/>} />
          </Routes>

          

         {/* <UserProvider>
            <Container className="text-center mt-5">
              <h1>Usuario aleatorio</h1>
              <UserCard />
              <CargarBotonUser />
            </Container>
          </UserProvider>
          */} 

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;