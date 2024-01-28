
# Food Delivery Backend 🍔🚚

## Overview

Welcome to the Food Delivery Backend, a Node.js application that serves as the backend for a food-delivery UI. This backend is built using Node.js, MongoDB, and Mongoose.

## APIs

-   **User Authentication:**
    -   **Login:** Securely authenticate users with the `/auth/login` endpoint.
    -   **Logout:** Allow users to log out using the `/auth/logout` endpoint.
    -   **Register:** Enable new users to register via the `/auth/register` endpoint.

-   **Restaurant Management:**    
    -   **Add Restaurant:** Add new restaurants with the `/restaurants/add` endpoint.
    -   **View Restaurants:** Retrieve a list of restaurants using the `/restaurants/view` endpoint.
    -   **View Discounts:** Retrieve available discounts with the `/restaurants/viewDiscounts` endpoint.
    -   **View Categories:** Get a list of restaurant categories via the `/viewCategories` endpoint.

## Tech Stack

-   **Node.js:** 
-   **Express:** 
-   **MongoDB:**
-   **Mongoose:**

## Setup

1.  **Clone the Repository:**
```bash
git clone https://github.com/sayuj1/food-delivery-backend.git
```
2. **Install Dependencies:**
```bash
cd food-delivery-backend
npm install
```
    
3.  **Run the Server:**
```bash
npm start
```

## Project Structure

```bash
food-delivery-backend/
|-- config/
|   |-- dbconfig.js
|	|-- default.env
|-- controllers
|	|-- authController.js
|	|-- restaurantController.js
|-- middlewares
|	|-- authProtect.js
|	|-- validator.js
|-- models
|	|-- Category.js
|	|--	Discount.js
|	|--	Restaurant.js
|	|--	User.js
|-- public/
|	|-- index.html
|-- routes/
|	|-- auth.js
|	|-- restaurant.js
|	|-- routes.js
|-- utils
|	|-- errorUtil.js
|-- package.json
|-- .gitignore
|-- package.json
|-- README.md
|-- vercel.json
```



## API Documentation

Explore the API endpoints and their usage in the API [Documentation](https://documenter.getpostman.com/view/14745238/2s9YyqihsS#53ecd93b-3290-4096-be38-e678b2046ddc).

## Deployed App

Check out the deployed app at [food-delivery-backend-livid.vercel.app](https://food-delivery-backend-livid.vercel.app/).
