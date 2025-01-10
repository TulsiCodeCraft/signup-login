import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post('http://localhost:3000/auth/forgot-password', { email });
      if (response.data.status) {
        setMessage("Check your email for the reset password link");
        setTimeout(() => navigate('/login'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          autoComplete='off'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>

        {message && <p className={message.includes("Check your email") ? "success-message" : "error-message"}>{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;

