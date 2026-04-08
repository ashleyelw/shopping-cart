from sqlmodel import Field, SQLModel, Session, create_engine, select
from typing import Optional

#establish connection to database
username = "root"
password = "root"
database_name = "shoppingcartdb"
DATABASE_URL = f"mysql+pymysql://{username}:{password}@localhost:3306/{database_name}"
engine = create_engine(DATABASE_URL, echo=True)

#create database table
class Product(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    price: float
    stock: int

SQLModel.metadata.create_all(engine)

#CRUD

#create 
def create_product(new_product: Product):
    with Session (engine) as session:
        session.add(new_product)
        session.commit()

#read
def get_all_products() -> list[Product]:
    with Session(engine) as session:
        products = session.exec(select(Product)).all()
        return products
    
def get_product_by_id(product_id: int) -> Product | None:
    with Session(engine) as session:
        product = session.get(Product, product_id)
        return product
    
def get_product_by_name(product_name: str) -> Product | None:
    with Session(engine) as session:
        product = session.exec(
            select(Product).where(Product.name == product_name),
            len(product.description) == 0
        )
    
#update
def update_product(product_id: int, updated_product: Product) -> Product | None:
    with Session(engine) as session:
        existing_product = session.get(Product, product_id)
        if existing_product:
            update_data = updated_product.model_dump(exclude_unset=True)
            for key, value in update_data.items():
                setattr(existing_product, key, value)
            session.add(existing_product)
            session.commit()
            session.refresh(existing_product)
            return existing_product
    return None

#delete
def delete_product(product_id: int) -> bool:
    with Session(engine) as session:
        product = session.get(Product, product_id)
        if product:
            session.delete(product)
            session.commit()
            return True
    return False