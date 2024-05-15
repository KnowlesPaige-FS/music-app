import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Login() {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h2>Login to EleutherosVibe</h2>
          <form>
            <div style={styles.formGroup}>
              <label htmlFor="username">Email or username</label>
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
            <button type="submit" style={styles.loginButton}>Login</button>
          </form>
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

