import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Login({ clientId, redirectUri, authEndpoint, responseType, scopes }) {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h2>Login to EleutherosVibe</h2>
          <p>
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`}
              style={styles.loginLink}
            >
              Login with Spotify
            </a>
          </p>
          <p style={styles.signupLink}>
            Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
          </p>
        </div>
      </section>
    </section>
  );
}

export default Login;


const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#2F2F3A',
    color: '#E5E5E5',
    minHeight: '100vh',
    padding: '50px 20px',
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 80px)', 
    color: '#212529'
  },
  loginBox: {
    backgroundColor: '#B0A9BA',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
  loginLink: {
    display: 'inline-block',
    margin: '4%',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#4D5C60',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  signupLink: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#E5E5E5',
    textDecoration: 'none',
  },
};

