import React from "react";
import { useCart } from "../components/CartContext";
import { Button, ListGroup, Container } from "react-bootstrap";

const Carrito = () => {
    const {cartItems, removeFromCart, clearCart} = useCart();

        return(
            <Container className="py-5">
                <h2>Carrito de Compras</h2>
                {cartItems.lenght === 0 ? (
                    <p>tu carrito esta vacio</p>
                ) : (
                    <ListGroup>
                        {cartItems.map((item, index) => (

                        <ListGroup.Item key={index}>
                        {item.nombre} - ${item.precio}

                        <Button variant="danger" size="sm" className="float-end" onClick={() => removeFromCart(item.id)}>
                            Quitar
                        </Button>

                        </ListGroup.Item>
                        ))}
                    
                    </ListGroup>
                )}

                {cartItems.lenght > 0 && (
                    <Button className="mt-3" variant="secondary" onClick={clearCart}>
                        Vaciar Carrito
                    </Button>
                )}
            </Container>
        )
}

export default Carrito;