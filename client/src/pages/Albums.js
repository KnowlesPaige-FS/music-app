// /* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useCallback } from 'react';
import SideNavigation from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import SmallCards from '../components/SmallCards';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Albums = ({ accessToken, onLogout }) => {
  const [popularAlbums, setPopularAlbums] = useState([]);
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

  const fetchPopularAlbums = useCallback(() => {
    if (accessToken) {
      axios
        .get('https://api.spotify.com/v1/me/albums', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          setPopularAlbums(response.data.items.slice(0, 6));
        })
        .catch(err => {
          console.error('Error fetching popular albums:', err);
        });
    }
  }, [accessToken]);

  const fetchTrendingNow = useCallback(() => {
    if (accessToken) {
      axios
        .get('https://api.spotify.com/v1/browse/new-releases', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          setTrendingNow(response.data.albums.items.slice(0, 4));
        })
        .catch(err => {
          console.error('Error fetching trending now:', err);
        });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchRecentlyPlayed();
    fetchPopularAlbums();
    fetchTrendingNow();
  }, [fetchRecentlyPlayed, fetchPopularAlbums, fetchTrendingNow]);

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
    <section style={styles.container}>
      <SideNavigation onLogout={onLogout} />
      <section style={styles.content}>
        <header style={styles.header}>
          <SearchBar onSearch={handleSearch} />
        </header>
        <main style={styles.mainContent}>
          <section style={styles.popularAlbums}>
            <h5>Your Favourite Albums</h5>
            <div style={styles.albumList}>
              {popularAlbums.map((album, index) => (
                <a key={index} href={album.album.external_urls.spotify} rel="noopener noreferrer" style={styles.link}>
                  <Circle image={album.album.images[0]?.url || 'placeholder.jpg'} title={album.album.name} />
                </a>
              ))}
            </div>
          </section>
          <section style={styles.trendingNow}>
            <h5>Trending Now</h5>
            <div style={styles.trendingList}>
              {trendingNow.map((album, index) => (
                <a key={index} href={album.external_urls.spotify} rel="noopener noreferrer" style={styles.link}>
                  <Cards img={album.images[0]?.url || 'placeholder.jpg'} title={album.name} />
                </a>
              ))}
            </div>
          </section>
          <section style={styles.recentlyPlayed}>
            <h5>Recently Played</h5>
            <div style={styles.recentList}>
              {recentlyPlayed.map((track, index) => (
                <a key={index} href={track.track.external_urls.spotify} rel="noopener noreferrer" style={styles.link}>
                  <SmallCards image={track.track.album.images[0]?.url || 'placeholder.jpg'} artistName={track.track.artists[0].name} songTitle={track.track.album.name} />
                </a>
              ))}
            </div>
          </section>
        </main>
      </section>
    </section>
  );
}

export default Albums;

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
  searchBar: {
    width: '300px',
    padding: '10px',
    border: '1px solid #DDD',
    borderRadius: '5px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 20px 0',
    backgroundColor: '#2F2F3A',
  },
  popularAlbums: {
    marginBottom: '30px',
  },
  albumList: {
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
    marginBottom: '30px',
  },
  recentList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    margin: '1% 2%'
  }
};
