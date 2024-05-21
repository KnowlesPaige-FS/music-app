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
    
  },
  loginContainer: {
    
  },
  loginBox: {
    
  },
  formGroup: {
    
  },
  input: {
    
  },
  loginButton: {
    
  },
  signupLink: {
    
  },
  link: {
    
  },
};

