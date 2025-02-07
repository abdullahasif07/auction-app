import React, { useState } from 'react';
import './App.css';
import Profile from '../html/Profile'
import Home from '../html/Home';
import SignUp from '../html/Signup';
import Login from '../html/Login';
import Browse from '../html/Browse';
import SpecificAuction from '../html/SpecificAuction';
import ChangePassword from '../html/ChangePassword';
import CreateAuction from '../html/CreateAuction';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, redirect } from 'react-router-dom';
import UserContext from '../html/UserContext'; // Make sure the path is correct

const App: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const router = createBrowserRouter([
        { path: "/", element: <SignUp />, index: true }, 
        { path: "/login", element: <Login /> },
        { path: "/home", element: <Home /> },
        { path: "/profile", element: <Profile />},
        { path: "/changePassword", element:<ChangePassword />},
        { path: "/createAuction", element:<CreateAuction />},
        { path: "/browse", element: <Browse />},
        { path: "/browse/:auctionId", element: <SpecificAuction />}, 

    ]);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
};

export default App;

