import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <section style={styles.container}>
      <Navigation />
      <section style={styles.content}>
        <h1>Unleash the Music That Moves You</h1>
        <p>
          Discover your next favorite song, artist, or playlist with EleutherosVibes — where your music journey knows no bounds. Immerse yourself in a world of sound that is as endless as it is diverse. Whether you're looking to rock out, chill out, or tune in to something new, you've come to the right place.
        </p>
        <h3>Join Our Community of Music Lovers</h3>
        <p>
          Start your free trial today and experience music like never before. Explore, enjoy, and connect with the melodies that define every moment of your life.
        </p>
        <p>Login or Sign Up to begin your adventure in sound.</p>
        <Link to="/login" className="login-button" style={styles.loginButton}>Login</Link>
      </section>
    </section>
  );
}

export default Home;

const styles = {
  container: {
    
  },
  content: {
    
  },
  loginButton: {
    
  },
};


