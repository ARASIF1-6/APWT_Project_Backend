# Inventory Management System Backend

A robust backend API built with NestJS for managing inventory, sales representatives, customers and orders.

## 🚀 Features

- Authentication and authorization with JWT
- Session management
- File uploads for product and profile images  
- PostgreSQL database integration with TypeORM
- RESTful APIs for:
  - Sales Representatives management
  - Product management 
  - Customer management
  - Cart and Order processing
  - Address management

## 📋 Prerequisites

- Node.js (v14+)
- PostgreSQL
- npm/yarn

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/inventory-management-system.git

# Install dependencies
npm install

# Configure environment
# Create a .env file with database credentials:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_password
DB_NAME=Inventory_Management_System

# Run migrations
npm run typeorm migration:run
```

## 🚀 Running the app

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

## 📝 API Documentation

### Authentication
- `POST /auth/register` - Register new sales representative
- `POST /auth/login` - Login and get JWT token
- `POST /auth/logout` - Logout and destroy session

### Sales Representatives
- `GET /seller/show_profile/:username` - Get seller profile
- `PUT /seller/update_profile/:username` - Update seller details
- `PUT /seller/update_password/:username` - Change password
- `POST /seller/address/:username` - Add address

### Products 
- `POST /seller/addproduct` - Add new product
- `GET /seller/show_all_product` - List all products
- `PUT /seller/update_product/:id` - Update product
- `DELETE /seller/delete_product/:name` - Delete product
- `GET /seller/search_product_name/:name` - Search product by name
- `GET /seller/search_product_category/:category` - Search by category

### Orders
- `POST /seller/order/:username` - Create order
- `GET /seller/show_all_order` - List all orders
- `GET /seller/view_cart` - View cart items
- `DELETE /seller/delete_order_history/:productId` - Delete order

## 📁 Project Structure

```
src/
├── Sales_Representatives/     # Main module
│   ├── auth/                 # Authentication
│   ├── customer/             # Customer management  
│   ├── entities/            
│   └── dto/
├── app.module.ts
└── main.ts
```

## 🔒 Security

- JWT authentication
- Password hashing with bcrypt
- Session management
- Input validation with class-validator
- File upload validation
