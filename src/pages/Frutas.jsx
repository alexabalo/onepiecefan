import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

{/*esto es la conexion al carrito*/}
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';
import { useNavigate, useLocation } from "react-router-dom"; // esto es para poder volver atras






const Frutas = () => {
  const [Fruta, setFruta] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart();
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/fruits/en")
      .then((res) => res.json())
      .then((data) => {
        setFruta(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar la api", err);
        setLoading(false);
      });
  }, []);

  const handleAgregarAlCarrito = (char) => {
    if(!user) {
      //lo redirigimos al login para pasarle la info de donde vino
      navigate('/login', {state: {from: location.pathname}});
      return;
    }
        //esto es para saber si esta logeado
        addToCart({
          cartItemId: Date.now(),
          id: char.id,
          nombre: char.name,
          tipo:char.type,
          imagen: char.filename,
        });
      };
  

  return (
    <Container className="mt-4">
      <h1 className="m-2 text-center">Frutas del diablo</h1>
      <p className="m-2 text-center">elegi tu fruta favorita</p>

      <Row>
        {Fruta.slice(0, 6).map((char) => (
          <Col
            key={char.id}
            md={4}
            className="d-flex justify-content-center mb-4"
          >
            <Card
              className="m-2 text-center shadow p-3"
              style={{ width: "18rem" }}
            >
              <Card.Img
                src={char.filename}
                className="d-flex justify-content-center mb-4"
                style={{ width: "200px", height: "200px", margin: '0 auto' }}
              />

              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Tipo:{char.type}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => handleAgregarAlCarrito(char)}>Comprar Frutas</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Frutas;
