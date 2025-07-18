import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form, Table } from "react-bootstrap";
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = "https://68489b9bec44b9f349416b0e.mockapi.io/api/clientes";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentItem, setCurrentItem] = useState({ name: "", description: "", filename: "", type: "" });

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener productos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      alert("Error cargando productos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleAgregarAlCarrito = (item) => {
    if (!user) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
    addToCart({
      id: item.id,
      nombre: item.name,
      tipo: item.type,
      imagen: item.filename,
    });
  };

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al crear producto");
      await fetchProductos();
      handleCloseModal();
    } catch (error) {
      alert("Error creando producto");
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      });
      if (!res.ok) throw new Error("Error al actualizar producto");
      await fetchProductos();
      handleCloseModal();
    } catch (error) {
      alert("Error actualizando producto");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que querés eliminar este producto?")) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar producto");
        await fetchProductos();
      } catch (error) {
        alert("Error eliminando producto");
        console.error(error);
      }
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setCurrentItem({ name: "", description: "", filename: "", type: "" });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Productos / Frutas</h1>
      <Button variant="primary" onClick={openCreateModal} className="mb-3">Crear nuevo producto</Button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Row>
          {productos.slice(0, 6).map((item) => (
            <Col key={item.id} md={4} className="mb-4 d-flex justify-content-center">
              <Card style={{ width: "18rem" }} className="text-center shadow p-3">
                {item.filename && (
                  <Card.Img
                    variant="top"
                    src={item.filename}
                    style={{ width: "200px", height: "200px", margin: "0 auto" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  {item.type && <Card.Text><strong>Tipo: {item.type}</strong></Card.Text>}
                  <Button variant="success" className="me-2" onClick={() => handleAgregarAlCarrito(item)}>
                    Comprar
                  </Button>
                  <Button variant="warning" className="me-2" onClick={() => openEditModal(item)}>
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* MODAL */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === "create" ? "Crear producto" : "Editar producto"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentItem.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFilename" className="mb-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                name="filename"
                value={currentItem.filename}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={currentItem.type}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button
            variant="primary"
            onClick={modalMode === "create" ? handleCreate : handleUpdate}
            disabled={!currentItem.name || !currentItem.description}
          >
            {modalMode === "create" ? "Crear" : "Actualizar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Productos;
