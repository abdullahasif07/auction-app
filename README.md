# Auction App - MERN Stack Project

This project is a fully functional Auction App built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to create auctions, bid on items, and manage their profiles. Below is an overview of the features and functionalities implemented in this project.

---

## Features

### 1. **User Authentication**
   - **Sign Up**: Users can create an account with a unique username and password. The username is validated for uniqueness.
   - **Login**: Registered users can log in using their credentials.
   - **Change Password**: Users can update their password securely.

### 2. **Auction Management**
   - **Create Auction**: Users can create auctions by providing details such as:
     - Title
     - Description
     - Starting Price
     - Starting Time
     - Ending Time
   - **Browse Auctions**: Users can view a list of ongoing auctions, filter them by title, and click on an auction to view its details.
   - **Specific Auction Page**: Displays all details of an auction, including:
     - Title
     - Description
     - Starting Price
     - Current Price
     - Starting Time
     - Ending Time
   - **Real-Time Bidding**: Users can place bids in real-time using WebSockets. The current price updates dynamically for all users viewing the auction.
     - Users cannot bid below the current price.
     - The auction creator cannot bid on their own auction.
     - The auction ends automatically at the specified time.

### 3. **User Profile**
   - **My Profile**: Displays user details, including:
     - Name
     - Username
     - List of auctions created by the user
     - Number of items owned (updated when the user wins an auction)
   - **Navigation**: Users can navigate to create a new auction or change their password from the profile page.

### 4. **Backend**
   - Built with **Node.js** and **Express.js**.
   - Uses **MongoDB** with **Mongoose** for data storage.
   - Implements **WebSockets** using **Socket.io** for real-time bidding functionality.
   - RESTful APIs for handling user authentication, auction creation, and bidding.

### 5. **Frontend**
   - Built with **React** and **TypeScript**.
   - Responsive design with a clean and intuitive user interface.
   - Uses **React Router** for navigation between pages.
   - Real-time updates using **Socket.io** for bidding.

---

## Technologies Used

### Backend
- **Node.js**: Runtime environment for the server.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and auction data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Socket.io**: Enables real-time, bidirectional communication between clients and the server.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **React Router**: Handles client-side routing.
- **CSS**: Basic styling for components and pages.

---

## Folder Structure

### Backend
- **controllers**: Contains functions to handle HTTP requests.
- **models**: Defines Mongoose schemas for User and Auction.
- **routes**: Defines API endpoints.
- **utils**: Contains helper functions.
- **server.js**: Sets up the HTTP server and WebSocket connections.
- **app.js**: Configures the Express app and middleware.

### Frontend
- **src**: Contains React components, pages, and utilities.
  - **components**: Reusable UI components.
  - **pages**: Individual pages like Login, Sign Up, Home, etc.
  - **utils**: Helper functions and constants.
  - **App.tsx**: Main application component.
  - **index.css**: Global styles.

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Set Up Backend**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

3. **Set Up Frontend**:
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the App**:
   - Open your browser and go to `http://localhost:3000`.

---

## Key Highlights
- Real-time bidding functionality using WebSockets.
- Secure user authentication and password management.
- Clean and modular code structure.
- Responsive and user-friendly interface.

---

Feel free to explore the code and contribute to the project! For any questions or feedback, please open an issue or reach out to the repository owner.
