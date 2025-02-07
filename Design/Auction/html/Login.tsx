import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
        const userData = {
            username: formData.username,
            password: formData.password,
        };
        try {
            const response = await axios.post('http://localhost:8000/user/loginUser', userData);
            console.log(response.data);
            alert('User logged in successfully!');
            navigate('/home');

        } catch (error) {
            console.error('Error logging in:', error);
            alert(error.response ? error.response.data.error : error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name='username'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} name='password'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};



export default Login;
