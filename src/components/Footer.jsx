import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} Todos los derechos reservados</small>
      </Container>
    </footer>
  );
};

export default Footer;