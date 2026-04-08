from fastapi import FastAPI
from crud import Product, get_all_products, create_product

app = FastAPI()

@app.get("/products")
def read_products():
    return get_all_products()

@app.post("/products")
def add_product(product: Product):
    return create_product(product)