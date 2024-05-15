import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function SignUp() {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.signupContainer}>
        <div style={styles.signupBox}>
          <h2>Sign up for EleutherosVibe</h2>
          <form>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <button type="submit" style={styles.signupButton}>Sign Up</button>
          </form>
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

