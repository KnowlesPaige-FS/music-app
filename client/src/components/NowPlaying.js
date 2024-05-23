// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const NowPlaying = ({ songTitle, artist }) => {
  return (
    <article style={styles.nowPlaying}>
      <div style={styles.coverImage}></div>
      <div style={styles.songInfo}>
        <h3 style={styles.songTitle}>{songTitle}</h3>
        <p style={styles.artistName}>{artist}</p>
      </div>
      <div style={styles.playButton}>
        <button style={styles.playIcon}>&#9654;</button>
      </div>
    </article>
  );
};

export default NowPlaying;

const styles = {
  nowPlaying: {
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#F0F0F0',
  },
  coverImage: {
    width: '100%',
    height: '120px',
    backgroundColor: '#2F2F3A',
  },
  songInfo: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
  },
  songTitle: {
    margin: '5px 0',
    fontSize: '1.1em',
  },
  artistName: {
    margin: '5px 0',
    color: '#555',
  },
  playButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#E0E0E0',
  },
  playIcon: {
    backgroundColor: '#5A5A73',
    color: '#E5E5E5',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
  playIconHover: {
    backgroundColor: '#7A7A9C',
  },
};

