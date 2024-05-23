import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.content}>
        <div style={styles.div}>
          <h1>Unleash the Music That Moves You</h1>
          <p>
            Discover your next favorite song, artist, or playlist with EleutherosVibes — where your music journey knows no bounds. Immerse yourself in a world of sound that is as endless as it is diverse. Whether you're looking to rock out, chill out, or tune in to something new, you've come to the right place.
          </p>
        </div>
        <div style={styles.div}>
          <h3>Join Our Community of Music Lovers</h3>
          <p>
            Start your free trial today and experience music like never before. Explore, enjoy, and connect with the melodies that define every moment of your life.
          </p>
        </div>
        <p><Link to="/login" style={styles.link}>Login</Link> or <Link to="/signup" style={styles.link}>Sign Up</Link> to begin your adventure in sound.</p>
        <Link to="/login" className="login-button" style={styles.loginButton}>Login</Link>
      </section>
    </section>
  );
}

export default Home;

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#2F2F3A',
    color: '#E5E5E5',
    minHeight: '100vh',
    padding: '50px 20px',
  },
  content: {
    padding: '1% 0',
    width: '70%',
    margin: '0 auto',
  },
  div: {
    width: '90%',
    margin: '2% auto',
    padding: '2% 4%'

  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold'
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#E5E5E5',
    backgroundColor: '#4D5C60',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    marginTop: '20px',
    fontFamily: 'Montserrat, sans-serif',
  },
};


