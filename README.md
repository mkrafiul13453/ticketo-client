# Bookora 📚

A full-stack **Online Book Selling & Management Platform** where customers can browse and purchase books, sellers can manage their books and orders, and admins can manage users, products, and the overall platform.

## 📋 Project Requirements

**Requirement Document:**

[Add your requirement document link here]

---

## 🚀 Clone Starter Branch

```bash
git clone -b starter YOUR_REPOSITORY_URL
```

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser to view the application.

---

# 🎯 Project Overview

**Bookora** is a role-based online book-selling platform that provides a complete solution for discovering, purchasing, and managing books online.

Customers can browse books, search and filter products, add books to their cart, and securely purchase them through an online payment system.

Sellers can manage their books, inventory, orders, and sales, while admins can oversee users, books, orders, payments, and the overall platform.

### System Roles

- Customer
- Seller
- Admin

---

# ✨ Core Features

## 🔐 Authentication & Authorization

### Authentication

- Email & Password Login
- Google Authentication
- Session Persistence
- BetterAuth Integration

### Authorization

- Role-Based Access Control (RBAC)
- Protected Routes
- Middleware Security
- HTTP-only Cookies

---

# 🏪 Seller & Store Management

Sellers can:

- Create seller/store profiles
- Upload store logos
- Add store websites
- Add store descriptions
- Manage store information
- Manage books
- Manage inventory
- Manage customer orders
- Track sales and revenue

---

# 📚 Book Management

Sellers/Admins can:

- Add Books
- Update Books
- Delete Books
- Manage Book Inventory
- Update Book Prices
- Manage Book Categories
- Upload Book Covers

### Book Information

Each book can contain:

```js
title;
coverImage;
author;
category;
isbn;
price;
discountPrice;
stock;
description;
publisher;
publicationDate;
sellerEmail;
status;
createdAt;
```

### Book Status

- Available
- Out of Stock
- Draft
- Published
- Unpublished

---

# 🛒 Shopping Cart System

Customers can:

- Add books to cart
- Remove books from cart
- Increase/decrease quantity
- View cart subtotal
- View total price
- Continue shopping
- Proceed to checkout

### Cart Flow

```text
Browse Books
      ↓
View Book Details
      ↓
Add to Cart
      ↓
Review Cart
      ↓
Checkout
      ↓
Payment
      ↓
Order Confirmation
```

---

# 📦 Order Management

Customers can:

- Place orders
- View order history
- View order details
- Track order status
- Cancel eligible orders
- View payment information

Sellers can:

- View customer orders
- Update order status
- Manage order fulfillment
- View sales information

### Order Status

```text
Pending
   ↓
Confirmed
   ↓
Processing
   ↓
Shipped
   ↓
Delivered
```

Orders may also be marked as:

- Cancelled
- Failed

---

# 💳 Payment System

Customers can securely purchase books using **Stripe**.

### Payment Features

- Stripe Checkout Session
- Secure Online Payment
- Payment Verification
- Transaction Tracking
- Order Creation After Successful Payment
- Payment History

### Payment Flow

```text
Add Books to Cart
       ↓
Checkout
       ↓
Create Payment Session
       ↓
Stripe Checkout
       ↓
Payment Success
       ↓
Payment Verification
       ↓
Create Order
       ↓
Update Inventory
       ↓
Order Confirmation
```

---

# ⭐ Featured Books

The platform can highlight popular and recommended books.

Featured sections may include:

- Best Selling Books
- New Arrivals
- Popular Books
- Recommended Books
- Discounted Books
- Featured Authors

---

# 🌐 Public Pages

## Home Page

The homepage includes:

- Hero Banner
- Featured Books
- Best Selling Books
- New Arrivals
- Popular Categories
- Featured Authors
- Statistics Section
- Customer Reviews
- Framer Motion Animations

---

## 📚 Books Page

Customers can:

- Browse all books
- Search books by title
- Search books by author
- Filter by category
- Filter by price
- Filter by availability
- Sort books
- Navigate through pagination

---

## 📖 Book Details Page

Each book details page contains:

- Book Cover
- Book Title
- Author
- Category
- ISBN
- Price
- Discount Price
- Stock Availability
- Description
- Publisher
- Publication Date
- Seller Information
- Add to Cart Button
- Buy Now Button

---

## 🛍️ Cart Page

The cart page includes:

- Selected Books
- Book Quantities
- Individual Prices
- Subtotal
- Total Amount
- Remove Item
- Update Quantity
- Checkout Button

---

## 💰 Checkout Page

Customers can provide:

- Name
- Email
- Phone Number
- Delivery Address
- City
- Postal Code

The checkout page displays:

- Order Summary
- Selected Books
- Quantity
- Subtotal
- Delivery Charge
- Total Amount
- Payment Method

---

# 📊 Dashboard Features

## 👤 Customer Dashboard

Customers can access:

- Overview Statistics
- Profile Management
- Order History
- Payment History
- Upcoming Deliveries
- Purchased Books
- Account Settings

---

## 🏪 Seller Dashboard

Sellers can access:

- Revenue Overview
- Sales Statistics
- Store Settings
- Add Book
- Manage Books
- Inventory Management
- Order Management
- Customer Orders
- Payment Information

---

## 👨‍💼 Admin Dashboard

Admins can access:

- Platform Analytics
- User Management
- Seller Management
- Book Management
- Category Management
- Order Management
- Transaction Monitoring
- Inventory Monitoring
- Block/Unblock Users
- System Overview

---

# 🔍 Search & Filtering

## Search

Users can search books using:

- Book Title
- Author Name
- ISBN

Example:

```js
title: { $regex: search, $options: "i" }
```

---

## Filters

Users can filter books by:

- Category
- Author
- Price Range
- Availability
- Rating

---

## Sorting

Books can be sorted by:

- Price: Low to High
- Price: High to Low
- Newest
- Best Selling
- Popularity

---

## Pagination

Server-side pagination can be implemented using:

```js
skip();
limit();
```

Example:

```js
const books = await collection
  .find(query)
  .skip(skip)
  .limit(limit)
  .toArray();
```

---

# 🛡️ Security Features

The platform implements several security mechanisms:

- JWT Authentication
- HTTP-only Cookies
- Route Protection Middleware
- Role-Based Access Control
- Secure API Endpoints
- Environment Variable Protection
- Secure Stripe Payment Processing
- Server-side Payment Verification
- Input Validation
- Protected Admin Routes
- Protected Seller Routes

---

# 🗄️ Database Collections

## Users

```js
name;
email;
image;
role;
isBlocked;
createdAt;
```

---

## Sellers

```js
storeName;
logo;
website;
description;
sellerEmail;
status;
createdAt;
```

---

## Books

```js
title;
coverImage;
author;
category;
isbn;
price;
discountPrice;
stock;
description;
publisher;
publicationDate;
sellerEmail;
status;
createdAt;
```

---

## Cart

```js
userEmail;
items;
totalAmount;
updatedAt;
```

Example:

```js
items: [
  {
    bookId;
    title;
    price;
    quantity;
    coverImage;
  }
]
```

---

## Orders

```js
orderId;
customerEmail;
items;
totalAmount;
shippingAddress;
paymentStatus;
orderStatus;
transactionId;
orderDate;
```

---

## Payments

```js
userEmail;
amount;
transactionId;
paymentStatus;
paymentMethod;
paidAt;
```

---

## Categories

```js
name;
description;
image;
status;
createdAt;
```

---

# 🔄 System Flow

```text
User
 ↓
Authentication
 ↓
Role Assignment
 ↓
Dashboard Routing
 ↓
Browse Books
 ↓
Search / Filter
 ↓
View Book Details
 ↓
Add to Cart
 ↓
Checkout
 ↓
Stripe Payment
 ↓
Payment Verification
 ↓
Order Creation
 ↓
Inventory Update
 ↓
Order Processing
 ↓
Book Delivery
 ↓
Admin Management
```

---

# 🧑‍💻 User Flow

## Customer

```text
Register / Login
      ↓
Browse Books
      ↓
Search / Filter
      ↓
View Book
      ↓
Add to Cart
      ↓
Checkout
      ↓
Make Payment
      ↓
Order Confirmation
      ↓
Track Order
```

---

## Seller

```text
Login
 ↓
Create Store
 ↓
Add Books
 ↓
Manage Inventory
 ↓
Receive Orders
 ↓
Process Orders
 ↓
Update Order Status
 ↓
Track Revenue
```

---

## Admin

```text
Login
 ↓
Admin Dashboard
 ↓
Manage Users
 ↓
Manage Sellers
 ↓
Manage Books
 ↓
Manage Categories
 ↓
Monitor Orders
 ↓
Monitor Payments
 ↓
Platform Analytics
```

---

# 🛠️ Tech Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- Framer Motion

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- BetterAuth
- JWT

## Payment

- Stripe

## Database

- MongoDB Atlas

---

# 📁 Suggested Project Structure

```text
bookora/
│
├── app/
│   ├── page.jsx
│   ├── books/
│   ├── cart/
│   ├── checkout/
│   ├── dashboard/
│   │   ├── customer/
│   │   ├── seller/
│   │   └── admin/
│   │
│   └── api/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── BookCard.jsx
│   ├── CartItem.jsx
│   └── ...
│
├── lib/
│   ├── mongodb.js
│   ├── auth.js
│   └── stripe.js
│
├── models/
│   ├── User.js
│   ├── Book.js
│   ├── Order.js
│   └── Payment.js
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env.local` file and configure the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_auth_secret

NEXT_PUBLIC_BASE_URL=http://localhost:3000

STRIPE_SECRET_KEY=your_stripe_secret_key

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

> Never expose secret keys or sensitive credentials in your source code or GitHub repository.

---

# 📈 Future Improvements

Possible future features include:

- Book Reviews & Ratings
- Wishlist
- Coupon System
- Multiple Payment Methods
- Delivery Tracking
- Email Notifications
- Invoice Generation
- Recommendation System
- Author Profiles
- Publisher Profiles
- Book Rental System
- AI-Based Book Recommendations
- Advanced Sales Analytics

---

# 📄 License

This project is created for **educational and portfolio purposes**.