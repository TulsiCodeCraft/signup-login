import React from 'react';
import '../App.css'


import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, UserCheck } from 'lucide-react';


const Home = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if(res.data.status){
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const stats = [
    { value: "10K+", label: "Active Students", icon: <Users className="icon" /> },
    { value: "500+", label: "Study Rooms", icon: <BookOpen className="icon" /> },
    { value: "50K+", label: "Study Hours", icon: <Trophy className="icon" /> },
    { value: "95%", label: "Success Rate", icon: <UserCheck className="icon" /> }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container header-content">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="gradient-text">EduCrew</span>
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="nav-links"
          >
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="animated-dots">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="dot"
              initial={{
                opacity: 0.3,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                backgroundColor: i % 2 === 0 ? '#9333ea' : '#06b6d4'
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
            />
          ))}
        </div>

        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-title">
              <span className="gradient-text">Revolutionize</span>
              <br />
              <span>Your Study Game</span>
            </h2>
            <p className="hero-subtitle">
              Join the next generation of collaborative learning where knowledge meets innovation
            </p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p className="copyright">© 2024 EduCrew. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
