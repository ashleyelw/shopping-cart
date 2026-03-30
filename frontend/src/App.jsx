import './App.css';

function App() {
  return (
    <>
      <div>
          <div className="App">
              <h1>Shopping Cart</h1>
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
  
  <h2>Snacks</h2>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
    </div>

    </>
  );
}

export default App;