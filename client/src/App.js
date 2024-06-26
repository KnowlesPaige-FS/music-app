import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Albums from './pages/Albums';
import Tracks from './pages/Tracks';
import SearchResults from './pages/SearchResults';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPES = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-library-read playlist-read-private';

function App() {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [tokenExpiration, setTokenExpiration] = useState(localStorage.getItem('tokenExpiration'));
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    setAccessToken(null);
    setRefreshToken(null);
    setTokenExpiration(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpiration');
    navigate('/login');
  }, [navigate]);

  const refreshAccessToken = useCallback(() => {
    if (refreshToken) {
      axios.post('http://localhost:4000/refresh', { refreshToken })
        .then(response => {
          const { accessToken, expiresIn } = response.data;
          setAccessToken(accessToken);
          localStorage.setItem('accessToken', accessToken);
          const newTokenExpiration = Date.now() + expiresIn * 1000;
          setTokenExpiration(newTokenExpiration);
          localStorage.setItem('tokenExpiration', newTokenExpiration);
        })
        .catch(err => {
          console.error('Error refreshing access token:', err);
          handleLogout();
        });
    }
  }, [refreshToken, handleLogout]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');

    if (codeParam) {
      setCode(codeParam);
    }
  }, []);

  useEffect(() => {
    if (code) {
      axios.post('http://localhost:4000/login', { code })
        .then(response => {
          const { accessToken, refreshToken, expiresIn } = response.data;
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          const newTokenExpiration = Date.now() + expiresIn * 1000;
          setTokenExpiration(newTokenExpiration);
          localStorage.setItem('tokenExpiration', newTokenExpiration);
          window.history.pushState({}, null, '/dashboard');
          navigate('/dashboard');
        })
        .catch(err => {
          console.error('Error logging in:', err);
        });
    }
  }, [code, navigate]);

  useEffect(() => {
    if (tokenExpiration && Date.now() >= tokenExpiration) {
      refreshAccessToken();
    } else if (tokenExpiration) {
      const timeout = setTimeout(() => {
        refreshAccessToken();
      }, tokenExpiration - Date.now());

      return () => clearTimeout(timeout);
    }
  }, [tokenExpiration, refreshAccessToken]);

  const handleSearch = (query) => {
    if (accessToken) {
      axios
        .get(`https://api.spotify.com/v1/search?q=${query}&type=artist,track,album`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          const results = [];
          if (response.data.artists) {
            results.push(...response.data.artists.items.slice(0, 6).map(artist => ({
              name: artist.name,
              image: artist.images[0]?.url || 'placeholder.jpg',
              type: 'Artist',
              url: artist.external_urls.spotify,
            })));
          }
          if (response.data.tracks) {
            results.push(...response.data.tracks.items.slice(0, 5).map(track => ({
              name: track.name,
              image: track.album.images[0]?.url || 'placeholder.jpg',
              type: 'Song',
              url: track.external_urls.spotify,
            })));
          }
          if (response.data.albums) {
            results.push(...response.data.albums.items.slice(0, 5).map(album => ({
              name: album.name,
              image: album.images[0]?.url || 'placeholder.jpg',
              type: 'Album',
              url: album.external_urls.spotify,
            })));
          }
          navigate('/search-results', { state: { results } });
        })
        .catch(err => {
          console.error('Error searching:', err);
        });
    }
  };

  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login clientId={CLIENT_ID} redirectUri={REDIRECT_URI} authEndpoint={AUTH_ENDPOINT} responseType={RESPONSE_TYPE} scopes={SCOPES} />} />
            <Route path='/signup' element={<Signup clientId={CLIENT_ID} redirectUri={REDIRECT_URI} authEndpoint={AUTH_ENDPOINT} responseType={RESPONSE_TYPE} scopes={SCOPES} />} />
            <Route path='/dashboard' element={<Dashboard accessToken={accessToken} onLogout={handleLogout} />} />
            <Route path='/albums' element={<Albums accessToken={accessToken} onLogout={handleLogout} />} />
            <Route path='/tracks' element={<Tracks accessToken={accessToken} onLogout={handleLogout} />} />
            <Route path='/search-results' element={<SearchResults onSearch={handleSearch} onLogout={handleLogout} />} />
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






