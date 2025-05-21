import React from "react";
import fondo from "../assets/fondo.jpg";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white z-2 position-relative"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center mb-4 ">Bienvenido a OnePiecefan</h1>
        <p className="text-center ">Pagina de Inicio de la aplicacion</p>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 1,
        }}
      ></div>
    </Container>
  );
};

export default Home;
