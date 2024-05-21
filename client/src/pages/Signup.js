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
    
  },
  signupContainer: {
    
  },
  signupBox: {
    
  },
  formGroup: {
    
  },
  input: {
    
  },
  signupButton: {
    
  },
  loginLink: {
    
  },
  link: {
    
  },
};

