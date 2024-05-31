import React from 'react';
import { useLocation } from 'react-router-dom';
import SideNavigation from '../components/SideNav';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const SearchResults = ({ onSearch, onLogout }) => {
  const location = useLocation();
  const { results } = location.state;

  const artists = results.filter(item => item.type === 'Artist');
  const songs = results.filter(item => item.type === 'Song');
  const albums = results.filter(item => item.type === 'Album');

  return (
    <section style={styles.container}>
         <SideNavigation onLogout={onLogout} />
         <section style={styles.content}>
            <header style={styles.header}>
            <SearchBar onSearch={onSearch} />
            </header>
        <main style={styles.mainContent}>
            <section style={styles.artists}>
            <h5>Artists</h5>
            <div style={styles.artistList}>
                {artists.map((artist, index) => (
                    <Link to={artist.url}  key={index} rel="noopener noreferrer" style={styles.link}>
                        <Circle image={artist.image} title={artist.name} />
                     </Link>
                ))}
            </div>
            </section>
            <section style={styles.songs}>
            <h5>Songs</h5>
            <div style={styles.songList}>
                {songs.map((song, index) => (
                    <Link to={song.url} key={index} rel="noopener noreferrer" style={styles.link}>
                        <Cards img={song.image} title={song.name} />
                    </Link>
                ))}
            </div>
            </section>
            <section style={styles.albums}>
            <h5>Albums</h5>
            <div style={styles.albumList}>
                {albums.map((album, index) => (
                    <Link to={album.url} key={index} rel="noopener noreferrer" style={styles.link}>
                        <Cards img={album.image} title={album.name} />
                    </Link>
                ))}
            </div>
            </section>
        </main>
      </section>
    </section>
  );
};

export default SearchResults;

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
  artists: {
    marginBottom: '30px',
  },
  artistList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  songs: {
    marginBottom: '30px',
  },
  songList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  albums: {
    marginBottom: '30px',
  },
  albumList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    margin: '1%'
  }
};
