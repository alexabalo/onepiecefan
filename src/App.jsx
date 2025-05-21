
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Frutas from './pages/Frutas'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

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
          </Routes>
          
        
        <Footer/>
        </div>
      </Router>
      
    
  )
}

export default App;