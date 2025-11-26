import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(res => setProductos(res.data))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>Precio: ${p.price}</p>
            <img src={p.images[0]} alt={p.title} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;