import {Navigate} from 'react-router-dom';

export default function RuteProtegida({ children}) {

    const auth = localStorage.getItem('auth') === 'true';
    return auth ? children : <Navigate to='/login' />
}