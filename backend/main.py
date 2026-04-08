from fastapi import FastAPI
import pymysql

app = FastAPI()

@app.get("/products")
def get_products():
    return products

with pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="shoppingcartdb",
) as connection:
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM products")
        products = cursor.fetchall()
        print(products)