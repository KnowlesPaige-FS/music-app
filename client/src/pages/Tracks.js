import React, { useState, useEffect, useCallback } from 'react';
import SideNavigation from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import SmallCards from '../components/SmallCards';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tracks = ({ accessToken, onLogout }) => {
  const [popularArtists, setPopularArtists] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const navigate = useNavigate();

  const fetchRecentlyPlayed = useCallback(() => {
    if (accessToken) {
      axios
        .get('https://api.spotify.com/v1/me/player/recently-played', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          setRecentlyPlayed(response.data.items.slice(0, 2));
        })
        .catch(err => {
          console.error('Error fetching recently played:', err);
        });
    }
  }, [accessToken]);

  const fetchPopularArtists = useCallback(() => {
    if (accessToken) {
      axios
        .get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          setPopularArtists(response.data.items.slice(0, 6));
        })
        .catch(err => {
          console.error('Error fetching popular artists:', err);
        });
    }
  }, [accessToken]);


  const fetchTrendingNow = useCallback(() => {
      if (accessToken) {
        axios
        .get('https://api.spotify.com/v1/browse/categories?locale=en_US', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          setTrendingNow(response.data.categories.items.slice(0, 4));
        })
        .catch(err => {
          console.error('Error fetching trending now:', err);
        });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchRecentlyPlayed();
    fetchPopularArtists();
    fetchTrendingNow();
  }, [fetchRecentlyPlayed, fetchPopularArtists, fetchTrendingNow]);

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
            })));
          }
          if (response.data.tracks) {
            results.push(...response.data.tracks.items.slice(0, 6).map(track => ({
              name: track.name,
              image: track.album.images[0]?.url || 'placeholder.jpg',
              type: 'Song',
            })));
          }
          if (response.data.albums) {
            results.push(...response.data.albums.items.slice(0, 6).map(album => ({
              name: album.name,
              image: album.images[0]?.url || 'placeholder.jpg',
              type: 'Album',
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
    <section style={styles.container}>
      <SideNavigation onLogout={onLogout} />
      <section style={styles.content}>
        <header style={styles.header}>
          <SearchBar onSearch={handleSearch} />
        </header>
        <main style={styles.mainContent}>
          <section style={styles.popularSongs}>
            <h5>Top Songs</h5>
            <div style={styles.songList}>
              {popularArtists.map((track, index) => (
                <Circle key={index} image={track.album.images[0]?.url || 'placeholder.jpg'} title={track.name} />
              ))}
            </div>
          </section>
          <section style={styles.trendingNow}>
            <h5>Recommendations</h5>
            <div style={styles.trendingList}>
              {trendingNow.map((track, index) => (
                <Cards key={index} img={track.icons[0]?.url || 'placeholder.jpg'} title={track.name} />
              ))}
            </div>
          </section>
          <section style={styles.recentlyPlayed}>
            <h5>Recently Played</h5>
            <div style={styles.recentList}>
              {recentlyPlayed.map((track, index) => (
                <SmallCards key={index} image={track.track.album.images[0]?.url || 'placeholder.jpg'} artistName={track.track.artists[0].name} songTitle={track.track.name} />
              ))}
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default Tracks;

const styles = {
  container: {
    display: 'flex',
    marginLeft: '15%',
    background: '#33303F',
    color: '#E7E3F1'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px 0',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#2F2F3A',
    marginBottom: '1%'
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px 0',
    backgroundColor: '#2F2F3A',
  },
  popularSongs: {
    marginBottom: '30px',
  },
  songList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  trendingNow: {
    marginBottom: '30px',
  },
  trendingList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  recentlyPlayed: {
    // marginBottom: '30px',
  },
  recentList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  nowPlaying: {
    marginTop: '10%',
    marginRight: '2%',
  },
};
