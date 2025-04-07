# Product API - Node.js & Express.js

A simple RESTful API built using **Node.js** and **Express.js** that performs basic CRUD operations on products, using a local JSON file as the database.

---

## Features

- Get all products
- Get a single product by ID
- Create a new product
- Update a product by ID
- Delete a product by ID
- Basic error handling middleware
- Logging every API request into `logs.json`

---

## File Structure

- app.js: Entry point of the application, sets up middleware and routes.
- package.json: Contains project dependencies and scripts.
- /routes/products.js: Contains all RESTful API routes for product operations.
- /data/products.json: Simulates a database to store product data locally.
- /data/logs.json: Stores logs for every incoming request (timestamp, method, and URL).

---

## Sample Product Format

```json
{
  "id": 1,
  "name": "Sample Product",
  "price": 99.99
}
```
---

Getting Started

1. Clone the repository:
  ``` git clone https://github.com/om272004/product-api-nodejs.git```

2. Navigate into the project directory:
  ``` cd product-api-nodejs ```

3. Install dependencies:
  ``` npm install ```

4. Run the server:
   ```node app.js```

5. The server will start at:
   ```http://localhost:3000```

6. Use tools like Postman or Thunder Client to test the following endpoints:
   - GET     /products
   - GET     /products/:id
   - POST    /products
   - PUT     /products/:id
   - DELETE  /products/:id




---

API Endpoints
-------------

Method   | Endpoint         | Description
---------|------------------|---------------------------
GET      | /products        | Get all products
GET      | /products/:id    | Get product by ID
POST     | /products        | Create a new product
PUT      | /products/:id    | Update product by ID
DELETE   | /products/:id    | Delete product by ID

---

Author

Made with Node.js by Om
