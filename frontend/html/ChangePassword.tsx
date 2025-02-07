import '../css/changePassword.css'
import React, { useState, useContext } from 'react'; // Import useContext
import axios from 'axios';
import UserContext from './UserContext';
import Navbar from './Navbar';

const ChangePassword: React.FC = () => {
    const  username  = localStorage.getItem('username') 
    const [formData, setFormData] = useState({
        new_password: '',
        confirm_password: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.new_password !== formData.confirm_password) {
            alert('Passwords do not match!');
            return;
        }
        const userData = {
            password: formData.new_password,
            username:username,
        };

        console.log("user data ", userData); 
        try {
            const response = await axios.post('http://localhost:8000/user/changePass', userData);
            console.log(response.data);
            alert('Password changed successfully!');

        } catch (error) {
            console.error('Error changing password:', error);
            alert(error.response ? error.response.data.error : error.message);
        }
    };

    return (
    <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="newPassword" aria-describedby="emailHelp" onChange={handleChange} name='new_password'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name='confirm_password' onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </>
    );
};

export default ChangePassword;