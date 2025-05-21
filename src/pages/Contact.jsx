import { useState } from "react";
import {Form, Button}from 'react-bootstrap';

import Swal from "sweetalert2";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const emailEsValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar que no haya campos vacios
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === '') {
      Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "Porfavor completar todos los campos",
      });

      return;
    }

    //validar email
    if (!emailEsValido(email)) {
      Swal.fire({
        icon: "Error",
        title: "Campos incompletos",
        text: "Por favor completar todos los campos",
      });
      return;
    }

    //todo funciona correctamente
    Swal.fire({
      icon: "success",
      title: "Formulario enviado",
      text: `Gracias, ${nombre}. te responderemos a la brevedad`,
    });

    setNombre("");
    setEmail("");
    setMensaje("");
  };


  return(
    <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', height: '450px'}}>

      <h2>Formulario de Contacto</h2>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type='text' placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}>
        
      </Form.Control>

    </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">

        <Form.Group className="mb-3" controlId='mensaje'>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as='textarea' rows={4}
          placeholder="Escribinos" value={mensaje} onChange={(e) => setMensaje}>
            
          </Form.Control>

        </Form.Group>
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
