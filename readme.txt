
1) Project Title: Mini Grocery (Shopping Cart app)

2) This website creates a simple user-friendly grocery cart application. It's  single-page for easy navigation. 

3) I used CSS and react to develop style, and javascript to write the code. SQLworkbench was used to create the database which was edited and updated through the fastapi local host /docs

4) Feature List:
- Cart pop-up window
- Adjusting the amount of items added to cart
- Removing items from cart


5) Folder structure
Front end:
app.css - style sheet for the website, images, grids, buttons, etc.
app.jsx fetches products from the backend/database and contains the code to display the frontend features
Index.css - more styling from when react was initially set up, colours and other info 
main.jsx - from react set up, renders app 

Backend: 
crud.py - connects to the sql database and contains all the CRUD operations
main.py - contains fast api, middleware 
Requirements.txt - incase its needed for dependencies 


6) Challenges 

- It was really difficult to connect SQL/database to the project, both setting it up and connecting it to the front end. I didn't really understand how to use SQL workbench either. After a lot of trial and error and googling and rereading the lecture slides I finally got it to work. 0.75 
- I was also confused on how to have the front end and css interact with the database so that the website actually displayed items from the database and not just static images. Looking at the canvas material and tutorial activity answers helped me to complete it. 0.5

I was having some issues with workbench, if the sql is not importing properly please try using:
mysql -u root -p shoppingcartdb < shoppingcartdb.sql
