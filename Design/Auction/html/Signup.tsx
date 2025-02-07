import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';
import axios from 'axios';



const Signup: React.FC = () => {


    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        const userData = {
            name: formData.name,
            username: formData.username,
            password: formData.password,
        };
    
        try {
            const response = await axios.post('http://localhost:8000/user/create', userData);
            console.log(response.data);
            alert('User created successfully!');
        } catch (error) {
            console.error('Error creating user:', error);
            if (error.response && error.response.status === 409) {
                alert('Username already exists. Please choose another username.');
            } else {
                alert(error.response ? error.response.data.error : error.message);
            }
        }
    };
    
   
        return (
            <div className="signup-container">
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sign Up</title>
                <form className="signup-login-form" onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <div className="signup-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" onChange={handleChange} />
                    </div>
                    <div className="signup-form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" onChange={handleChange} />
                    </div>
                    <div className="signup-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                    </div>
                    <div className="signup-form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirmPassword" placeholder="Re-enter your password" onChange={handleChange} />
                    </div>
                    <div className="signup-form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="signup-form-group signup-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        );
    };

    export default Signup;
