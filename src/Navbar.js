// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';  
import { ReactComponent as GithubLogo } from './github-1.svg';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">AustinPlatt</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/austin-platt15/" target="_blank" rel="noopener noreferrer">
          <LinkedInLogo />
        </a>
      </div>
      <div className="github-logo">
        <a href='https://github.com/austinplatt' target="_blank" rel="noopener noreferrer">
          <GithubLogo />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;






