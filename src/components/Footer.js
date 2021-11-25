import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <Link className='button' to='/'>Search Page</Link>
            <Link className='button' to='/saved'>Favorites</Link>
        </footer>
    )
}

export default Footer;