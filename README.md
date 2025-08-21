# LiteMart

![Next.js](https://img.shields.io/badge/Next.js-13.4.6-blue?logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)

---

## Project Description

LiteMart is a modern e-commerce platform built with **Next.js**, **NextAuth.js**, and **MongoDB**. Users can authenticate using **Google OAuth**, browse products, and manage items in a responsive interface. The project demonstrates **authentication, database integration, and server-side functionality** using Next.js API routes.

---

## Features

* Google OAuth login/signup
* Session management with NextAuth
* Product CRUD operations
* MongoDB integration
* Responsive design
* Ready for deployment on Vercel

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/litemart.git
cd litemart
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env.local` file in the project root with the following:

```env
# Local development
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
```

> For production (Vercel), set environment variables in the Vercel dashboard:

```env
NEXTAUTH_URL=https://litemart.vercel.app
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Summary

| Route                       | Method | Description                             |
| --------------------------- | ------ | --------------------------------------- |
| `/api/auth/signin`          | GET    | Initiates user sign-in (Google OAuth)   |
| `/api/auth/callback/google` | GET    | Google OAuth callback                   |
| `/api/auth/signout`         | POST   | Signs out the user                      |
| `/api/auth/session`         | GET    | Returns current user session            |
| `/api/products`             | GET    | Fetch all products                      |
| `/api/products`             | POST   | Add a new product (authenticated users) |
| `/api/products/:id`         | GET    | Fetch a single product by ID            |
| `/api/products/:id`         | PUT    | Update a product by ID                  |
| `/api/products/:id`         | DELETE | Delete a product by ID                  |

---

## Deployment

* **Vercel:** Connect your GitHub repository and set environment variables.
* **NextAuth & MongoDB:** Ensure the production `NEXTAUTH_URL` matches your deployed domain.

---


