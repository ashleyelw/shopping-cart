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

  return (
    <>
      <div>
          <div className="App">
              <h1>Shopping Cart</h1>

            <div className="product-list">
              <h2>Browse Products</h2>
              {products.map((product) => (
                  <div key={product.id} className="product-item">
                      <h3>{product.name}</h3>
                      <p>Price: ${product.price}</p>
                      <button>Add to Cart</button>
                  </div>
              ))}
          </div>

              <div className="flex-container">
                  <div className="product-list">
                      <h2>Products</h2>
                      {/* Product items will go here */}
                  </div>
              </div>
          </div>
    
    <h1>Grocery Products</h1>

    <h2>Fruits</h2> 
      <div class="fruit">
      <div>Apple</div>
      <div>Peach</div>
      <div>Lychee</div>
      <div>Grapes</div>
      <div>Mandarin</div>
      <div>Strawberry</div>
    </div>

    <div class="increment-decrement">
      <button>+</button>
      <button>-</button>
    </div>

    <div class="add to-cart">
      <button>Add to Cart</button>
    </div>
      <div class="increment-decrement">
      <button>+</button>
      <button>-</button>
  
      <button>Add to Cart</button>
      <button>Add to Cart</button>
      <button>Add to Cart</button>
      <button>Add to Cart</button>
      <button>Add to Cart</button>

    </div>

    <h2> Vegetables</h2>
      <div class="vegetable">
      <div>Carrot</div>
      <div>Broccoli</div>
      <div>Spinach</div>
    </div>

    

    <h2>Dairy</h2>
     <div class="dairy">
      <div>Milk</div>
      <div>Cheese</div>
      <div>Yogurt</div>
    </div>
    </div>

    <div class="add to-cart">
      <button>Add to Cart</button>
    </div>
  
  <h2>Fruit</h2>
    <div class="image-container">
      <img src="https://png.pngtree.com/png-vector/20231226/ourmid/pngtree-big-apple-png-image_11383442.png" alt="Snack 1" class = "apple"/>
      <img src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-lychee-fruit-fresh-tropical-flavor-png-image_20017264.png" alt="Snack 2" class = "apple"/>
      <img src="https://png.pngtree.com/png-vector/20231226/ourmid/pngtree-big-apple-png-image_11383442.png" alt="Snack 3" class = "apple"/>
    </div>
    
   <div class="add to-cart">
      <button>Add to Cart</button>
    </div>

    </>
  );
}

export default App;