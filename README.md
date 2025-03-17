# API Market 🛠️

## Overview
API Market is a centralized platform for discovering, managing, and accessing various paid and free APIs. It provides a seamless experience for developers to explore APIs, submit their own, and interact with the API ecosystem.

## Features 🚀
- 🔍 **API Discovery**: Browse a collection of APIs with details, pricing, and endpoints.
- 📝 **API Submission**: Users can submit their APIs for listing.
- ⭐ **Reviews & Ratings**: Rate and review APIs based on user experience.
- 🏷️ **User Roles**: Admins manage API approvals, while users can explore and review.
- 🔐 **Authentication**: Secure login system with JWT-based authentication.
- 📊 **Admin Dashboard**: Manage API submissions, user reviews, and API details.

## Tech Stack 🏗️
- **Frontend**: React (Vite) ⚛️
- **Backend**: Node.js + Express 🛠️
- **Database**: MongoDB 
- **Authentication**: JWT & Role-Based Access Control 🔑
- **State Management**: Context API ⚡

## Installation & Setup 🏁
1. Clone the repository:
   ```sh
   git clone https://github.com/manishrana0725/api_market.git
   ```
2. Navigate to the project folder:
   ```sh
   cd api_market
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```
5. Start the backend server:
   ```sh
   npm run server
   ```
6. Navigate to the frontend folder & install dependencies:
   ```sh
   cd client
   npm install
   ```
7. Start the frontend server:
   ```sh
   npm run dev
   ```

## API Routes 📌
### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get a JWT token

### API Management
- `GET /api_market/apis` - Get all APIs
- `POST /api_market/api` - Submit a new API (Requires authentication)
- `GET /api_market/api/:id` - Get details of a specific API
- `PUT /api_market/api/:id` - Update API details (Admin only)
- `DELETE /api_market/api/:id` - Delete an API (Admin only)

### Reviews & Ratings
- `POST /reviews/:apiId` - Add a review
- `GET /reviews/:apiId` - Get reviews for an API

## Usage 🛠️
- **Browse APIs**: Visit the homepage and explore available APIs.
- **Submit API**: Logged-in users can submit their APIs for review.
- **Admin Controls**: Admins can approve, update, or remove API listings.
- **Review System**: Users can rate and review APIs to help others make informed choices.



💡 **API Market** - Your one-stop platform for exploring and managing APIs! 🚀

