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
    "Lychees": "https://media.istockphoto.com/id/1401717704/photo/lychee-with-green-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=UxfBbxVUE6XOFRRwaS7om5KNX8pTuDnfhMVwc5gEwKs=",
    "Yogurt":"https://img.freepik.com/free-vector/realistic-vector-icon-illustration-strawberry-yoghurt-jar-with-spoon-full-yogurt-isolated_134830-2521.jpg?semt=ais_hybrid&w=740&q=80",
    "Milk":"https://t4.ftcdn.net/jpg/05/35/38/81/360_F_535388138_vrJV0SoQBPc6oUyHeIFQkw8nFaH1GP3O.jpg",
    "Butter":"https://static.vecteezy.com/system/resources/thumbnails/044/813/520/small/butter-with-knife-isolated-on-transparent-background-png.png",
    "Cheese":"https://static.vecteezy.com/system/resources/thumbnails/046/437/254/small/3d-cheese-emoji-png.png",
    "Lettuce":"https://t4.ftcdn.net/jpg/02/80/03/99/360_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg",
    'Tomato':"https://media.istockphoto.com/id/93041995/photo/tomato-w-clipping-path.jpg?s=612x612&w=0&k=20&c=YxS61cEClrQH_6z01jtYWZ54ENarwpTNSufGao_Wl1I=",
    "Onion":"https://static.vecteezy.com/system/resources/thumbnails/027/291/063/small/vibrant-fresh-sliced-onion-crisp-and-flavorful-culinary-ingredient-ai-generated-free-png.png",
    "Ginger":"https://static.vecteezy.com/system/resources/thumbnails/055/848/163/small/a-fresh-ginger-root-with-a-knobby-tan-surface-and-a-textured-appearance-png.png",
    "Bread":"https://static.vecteezy.com/system/resources/thumbnails/070/129/276/small/delicious-loaf-of-crusty-bread-golden-baked-food-on-transparent-background-png.png",
    "Cake":"https://media.istockphoto.com/id/1472849554/photo/birthday-cake-with-a-blue-ganache-drip-and-colorful-sprinkles-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=5imrP5Ie01Z9ZqzU8s-njtYW-UC5V-vUYONbljm_XBk=",
    "Ice cream":"https://static.vecteezy.com/system/resources/previews/059/519/833/non_2x/neapolitan-ice-cream-in-a-metal-tub-png.png",
    "Pie":"https://png.pngtree.com/png-clipart/20231109/original/pngtree-apple-pie-pi-day-png-image_13520137.png",
  };

  const [cart, setCart] = useState({});

  const increment = (product) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      return {
        ...prevCart,
        [product.id]: { product, quantity: currentQuantity + 1 },
      };
    });
  }

  const decrement = (product) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      if (currentQuantity <= 1) {
        const { [product.id]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [product.id]: { product, quantity: currentQuantity - 1 },
      };
    });
  }

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <h2>Browse Products</h2>

      <button className="view-cart" onClick={() => setShowCart(true)}>
        View Cart
      </button>   

    <div className="image-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          
          <img
            src={productImages[product.name]}
            alt={product.name}
          />

          <h3>{product.name}</h3>
          <p>${product.price}</p>

          <div className="add">
            <button onClick={() => increment(product)}>Add to cart</button>
          </div>

          <div className="increment-decrement">
            <button onClick={() => decrement(product)}>-</button>
            <span>{cart[product.id]?.quantity || 0}</span>
            <button onClick={() => increment(product)}>+</button>
          </div>

          {showCart && (
            <div className="cart-overlay">
              <div className="cart-bg">
                <h2>Your Cart</h2>

                {Object.values(cart).length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  Object.values(cart).map(({ product, quantity }) => (
                    <div key={product.id} className="cart-item">
                      <span>{product.name}</span>
                      <span>Qty: {quantity}</span>
                      <span>${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  ))
                )}
                <button onClick={() => setShowCart(false)}>Close</button>
                <button onClick={() => setCart({})}>Clear Cart </button>

              </div>
            </div>
          )}


        </div>
      ))}
    </div>

    </div>
    );
  
}

export default App;