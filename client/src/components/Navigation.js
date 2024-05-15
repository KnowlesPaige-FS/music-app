/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navigation = () => {
  return (
    <nav style={styles.nav} className="d-flex flex-row justify-content-between align-items-center">
        <Link to='/'><img style={styles.img} src={logo} alt="EleutherosVibe logo"/></Link>
        <div>
            <ul style={styles.ul} className="d-flex flex-row justify-content-end align-items-center">
            <li style={styles.li}>
                <Link to="/login" style={styles.link}>Login</Link>
            </li>
            <li style={styles.li}>
                <Link to="/signup" style={styles.link}>Sign Up</Link>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;

const styles = {
    nav: {
        width: '100%',
        height: '120px',
        padding: '2%',
    },
    img: {
        height: '120px'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        fontWeight: 'bold',
    },
    ul: {
        listStyleType: 'none',
        width: '50%',
    },
    li: {
        color: '#',
        margin: '0 6%',
        padding: '0 6%',
    }
}