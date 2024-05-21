import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Albums from './pages/Albums';
import Genre from './pages/Genre';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPES = 'user-read-private user-read-email';

function App() {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');

    if (codeParam) {
      setCode(codeParam);
    }
  }, []);

  useEffect(() => {
    if (code) {
      axios.post('http://localhost:3000/login', { code })
        .then(response => {
          setAccessToken(response.data.accessToken);
          window.history.pushState({}, null, '/dashboard');
        })
        .catch(err => {
          console.error('Error logging in:', err);
        });
    }
  }, [code]);

  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login clientId={CLIENT_ID} redirectUri={REDIRECT_URI} authEndpoint={AUTH_ENDPOINT} responseType={RESPONSE_TYPE} scopes={SCOPES} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard accessToken={accessToken} />} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/genre' element={<Genre />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

const styles = {
  main: {
    
  }
};