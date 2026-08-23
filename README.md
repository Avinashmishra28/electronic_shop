# 🛒 Electronic Shop

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** e-commerce application for browsing and purchasing electronic products.

## 🚀 Features

### 👤 User Features

* User signup and login
* Browse electronic products
* Search products
* Filter products by category
* View product details
* Add products to cart
* Update cart items
* Manage checkout address
* Place orders using Cash on Delivery (COD)
  

### 🛠️ Admin Features

* View all products
* Add new products
* Edit products
* Delete products
* Manage product stock

## 💻 Technologies Used

### Frontend

* React
* React Router
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt

### Database

* MongoDB Atlas

## 📁 Project Structure

```text
electronic_shop/
│
├── frontend/
│   ├── src/
│   │   ├── admin/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Avinashmishra28/electronic_shop.git
cd electronic_shop
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5001/api
```

**Never commit your `.env` files to GitHub.**

## ▶️ Run the Project

### Start Backend

From the `backend` folder:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5001
```

### Start Frontend

From the `frontend` folder:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🔗 API

The frontend communicates with the backend using Axios.

The local API base URL is:

```text
http://localhost:5001/api
```

## 🗄️ Database

This project uses **MongoDB Atlas** for storing:

* Users
* Products
* Cart data
* Addresses
* Orders

MongoDB Compass is optional and is only used to view/manage the database. The deployed application connects directly to MongoDB Atlas.

## 🔎 Product Search & Categories

Users can search products by title and filter products by category.

Available categories include:

* Laptops
* Mobiles
* Tablets

## 🛍️ Order Flow

```text
User
 ↓
Browse Products
 ↓
Search / Filter
 ↓
Product Details
 ↓
Add to Cart
 ↓
Checkout
 ↓
Enter Address
 ↓
Place Order
 ↓
Order Created
 ↓
Cart Cleared
```

## 🔒 Security

* Passwords are hashed using bcrypt.
* Environment variables are used for sensitive configuration.
* `.env` files are excluded from Git.
* MongoDB Atlas is used as the production database.

## 📌 Future Improvements

Some features that could be added in the future:

* Online payment integration
* User order history
* Admin order management
* User profile
* Product reviews and ratings
* Product images upload
* Pagination
* Authentication using JWT
* Admin authentication/authorization
* Wishlist
* Product sorting

## 👨‍💻 Author

**Avinash Mishra**

GitHub:
https://github.com/Avinashmishra28
