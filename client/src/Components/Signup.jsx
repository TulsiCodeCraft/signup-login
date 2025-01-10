import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password,
        }).then(response => {
            if (response.data.status) {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
        });
    };
    
    return (
        <div className='sign-up-container'>
            {/* Animated background dots */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="dot"
                    initial={{
                        opacity: 0.3,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2
                    }}
                    style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: i % 2 === 0 ? '#9333ea' : '#06b6d4'
                    }}
                />
            ))}
            
            <motion.form 
                className='sign-up-form'
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="form-inner">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Sign Up
                    </motion.h2>
                    
                    <motion.div
                        className="input-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </motion.div>
                    
                    <motion.div
                        className="input-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            autoComplete='off'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </motion.div>
                    
                    <motion.div
                        className="input-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='******'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </motion.div>
                    
                    <motion.button
                        type='submit'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Sign Up
                    </motion.button>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Have an Account? <Link to="/login">Login</Link>
                    </motion.p>
                </div>
            </motion.form>
        </div>
    );
};

export default Signup;