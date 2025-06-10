
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Frutas from './pages/Frutas'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';

/*prueba de los links*/
import Perfil from './pages/Perfil';
import Login from './pages/Loguin';
import Administracion from './pages/Administracion';
import RutaProtegida from './components/RutaProtegida';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

function App() {

  return (
    
      <Router>
       <div className='d-flex flex-column min-vh-100'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/Personajes' element={<Personajes/>}  />
              <Route path='/Frutas' element={<Frutas/>}  />
              <Route path='/Contact' element={<Contact/>} />

              {/* prueba perfil*/}
              <Route path='/Login' element={<Login/>} /> 
              <Route path='/Perfil/:id' element={
                <RutaProtegida><Perfil /></RutaProtegida>
              } />

              <Route path='/admin' element={
                <RutaProtegida><Administracion/></RutaProtegida>
              } />

          </Routes>
              <UserProvider>
                
              </UserProvider>
        
        <Footer/>
        </div>
      </Router>
      
    
  )
}

export default App;