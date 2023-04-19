import React from 'react';
import './PageHeader.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function PageHeader() {
    return (
        <section className='PageHeader'>
            <header>
                <h1>SFPOPOS</h1>
                <h2 className='Header-Subheader'>San Franciscos Privately Owned Public Spaces</h2>
                <nav role="navigation" className='Navigation'>
                {/* A function to determine what class name should be applied to any link. 
                React Router will pass an isActive prop. This is a Boolean. 
                /True when the link is active and False when not. */}
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">List</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/register">Register</NavLink>
                <RandomSpace />
                </nav>
            </header>
        </section>
    )
  }
  
export default PageHeader;