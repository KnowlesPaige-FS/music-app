/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const SideNavigation = ({ onLogout }) => {
  return (
    <nav style={styles.nav} className="d-flex flex-column justify-content-between align-items-start">
      <Link to='/dashboard'><img style={styles.img} src={logo} alt="EleutherosVibe logo"/></Link>
      <div style={styles.menu}>
        <h5>Browse Music</h5>
        <ul style={styles.ul} className="d-flex flex-column">
          <li style={styles.li}> 
            <Link to="/dashboard" style={styles.link}>Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/albums" style={styles.link}>Albums</Link>
          </li>
          <li style={styles.li}>
            <Link to="/genre" style={styles.link}>Genre</Link>
          </li>
        </ul>
      </div>
      <div style={styles.logout}>
      <h5 onClick={onLogout} style={styles.logoutLink}>Logout</h5>
      </div>
    </nav>
  );
};

export default SideNavigation;

const styles = {
  nav: {
    width: '15%',
    height: '100vh',
    padding: '2%',
    backgroundColor: '#2F2F3A',
    color: '#E5E5E5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // position: 'fixed'
  },
  img: {
    height: '120px',
    marginBottom: '20px',
  },
  menu: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#E5E5E5',
    fontWeight: 'bold',
    padding: '10px 0',
    display: 'block',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    marginBottom: '10px',
  },
  logout: {
    marginTop: 'auto',
  }
};
