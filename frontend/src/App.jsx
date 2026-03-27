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
          
          <p> Choose a fruit: </p>
            <div class="fruit">
              <div>Apple</div>
              <div>Banana</div>
              <div>Cherry</div>
            </div>
      </div>
    </>
  );
}

export default App;