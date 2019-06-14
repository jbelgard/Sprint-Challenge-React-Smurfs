import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <h2>Welcome to Smurf Village</h2>
            <img src='https://nomoreworkhorse.files.wordpress.com/2017/03/unnamed5.jpg' />
            <Link to='/smurfs' className='link'>Enter the Village</Link>
        </div>
    )
}

export default Header
