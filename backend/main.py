from fastapi import FastAPI
from crud import Product, get_all_products, create_product, update_product, delete_product 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000", 
    "http://127.0.0.1:3000",
    "http://localhost:5173", 
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/products")
def read_products():
    return get_all_products()

@app.post("/products")
def add_product(product: Product):
    return create_product(product)

@app.put("/products/{product_id}")
def edit_product(product_id: int, product: Product):
    return update_product(product_id, product)

@app.delete("/products/{product_id}")
def remove_product(product_id: int):
    success = delete_product(product_id)
    return {"success": success}
