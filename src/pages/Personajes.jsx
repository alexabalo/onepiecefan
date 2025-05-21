import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import fondo from '../assets/fondo.jpg'

const Personajes = () => {
  const [Personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/characters/en")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar la api", err);
        setLoading(false);
      });
  }, []);

  return (
    <Container 
    
      >
      <h1 className="m-2 text-center">Personajes</h1>
      <p className="m-2 text-center">Elegi tu personaje favorito</p>

      <Row>
        {Personajes.slice(0, 6).map((char) => (
          <Col
            key={char.id}
            md={4}
            className="d-flex justify-content-center mb-4"
          >
            <Card
              className="m-2 text-center shadow p-3 "
              style={{ width: "18rem" }}
            >
              <Card.Img
                src={char.filename}
                className="d-flex justify-content-center mb-4 "
                style={{ width: "200px", height: "200px", margin: '0 auto'   }}
              />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>{char.job}</strong>
                </Card.Text>
                <Button variant="primary">Comprar Personaje</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Personajes;
