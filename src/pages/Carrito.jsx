import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openEditModal = (item) => {
    setCurrentItem({ ...item });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Editamos el item del carrito directamente (versión simple para mock)
    cartItems.forEach((item, index) => {
      if (item.id === currentItem.id) {
        cartItems[index] = currentItem;
      }
    });
    handleCloseModal();
  };

  return (
    <Container className="mt-4">
      <h2>Carrito de frutas</h2>
      <Button variant="danger" className="mb-3" onClick={clearCart}>Vaciar carrito</Button>

      {cartItems.length === 0 ? (
        <p>No hay frutas en el carrito.</p>
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.cartItemId}>
                <td>{item.nombre}</td>
                <td>{item.tipo}</td>
                <td>
                  <img src={item.imagen} alt={item.nombre} width="60" />
                </td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => openEditModal(item)} className="me-2">
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.cartItemId)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal para editar fruta */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar fruta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                value={currentItem?.nombre || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="tipo" className="mt-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                name="tipo"
                type="text"
                value={currentItem?.tipo || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="imagen" className="mt-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                name="imagen"
                type="text"
                value={currentItem?.imagen || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSave}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Carrito;
