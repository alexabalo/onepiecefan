import { useParams } from "react-router-dom";
import {Container} from 'react-bootstrap';

function Perfil() {
    const {id} = useParams();

    return(
        <Container className="mt-4">
            <h2>Perfil del usuario</h2>
            <p>Bienvenido, {id}</p>
        </Container>
    );
}

export default Perfil;