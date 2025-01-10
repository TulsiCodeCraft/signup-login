import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate()

    Axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/login', {
            username,
            password,
        }).then(response=>{
            if(response.data.status){
                navigate('/home')
            }
           
        }).catch(err=>{
            console.log(err)
        })
    };

    return (
        <div className='sign-up-container'>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                

                <label htmlFor='username'>Username:</label>
                <input
                            type='text'
                            id='username'
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    placeholder='******'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
                <Link to="/forgotPassword">Forgot Password?</Link>
                <p>Don't Have Account? <Link to="/">Sign Up</Link></p>

            </form>
        </div>
    )
}

export default Login;

