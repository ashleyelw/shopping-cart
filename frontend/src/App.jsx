import { useState, useEffect, useRef } from 'react';
import './App.css';

const API_BASE_URL = 'http://127.0.0.1:8000/products';

function App() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef(null);

  //fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    inputRef.current?.focus();
  }, []);

  const productImages = {
    "Apple": "https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg",
    "Peach": "https://t3.ftcdn.net/jpg/03/00/59/16/360_F_300591692_sE2Zpz9hoU0H1Klz0JzRw1F74HO7vWne.jpg",
    "Strawberries": "https://thumbs.dreamstime.com/b/three-strawberries-strawberry-leaf-white-background-fruit-nature-three-strawberries-strawberry-leaf-white-146939724.jpg",
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <h2>Browse Products</h2>
   
    <div className="image-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          
          <img
            src={productImages[product.name]}
            alt={product.name}
          />

          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <div className="increment-decrement">
            <button>-</button>
            <button>+</button>
          </div>

          <div className="add">
            <button>Add to Cart</button>
          </div>

        </div>
      ))}
    </div>

    </div>
    );
  
}

export default App;