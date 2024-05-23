import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function SignUp({ clientId, redirectUri, authEndpoint, responseType, scopes }) {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.signupContainer}>
        <div style={styles.signupBox}>
          <h2>Sign up for EleutherosVibe</h2>
          <p>
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`}
              style={styles.signupLink}
            >
              Sign Up with Spotify
            </a>
          </p>
          <p style={styles.loginLink}>
            Already have an account? <Link to="/login" style={styles.link}>Login</Link>
          </p>
        </div>
      </section>
    </section>
  );
}

export default SignUp;

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#2F2F3A',
    color: '#E5E5E5',
    minHeight: '100vh',
    padding: '50px 20px',
  },
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 80px)', 
    color: '#212529'
  },
  signupBox: {
    backgroundColor: '#B0A9BA',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  },
  signupLink: {
    display: 'inline-block',
    margin: '4%',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#4D5C60',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  loginLink: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#E5E5E5',
    textDecoration: 'none',
  },
};

