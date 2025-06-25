import { useState } from "react";

function Productos(){
    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState([null]);
    const [contadorId, setContadorId] = useState(1);

    const agregarProducto=(producto)=> 
        {
            const nuevoProducto = {...producto, id: constadorId};
            setProductos([...productos, nuevosProductos]);
            setContadorId(contadorId + 1);

            }

        };

    return(
        <div>

        </div>
    )
    
}

export default Productos;