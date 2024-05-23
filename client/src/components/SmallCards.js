/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const SmallCards = ({ image, artistName, songTitle }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={artistName} style={styles.image} />
      </div>
      <div style={styles.songInfo}>
        <p style={styles.artistName}>{artistName}</p>
        <h4 style={styles.songTitle}>{songTitle}</h4>
      </div>
      <div style={styles.playButton}>
        <button style={styles.playIcon}>&#9654;</button>
      </div>
    </div>
  );
};

export default SmallCards;

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    margin: '2%',
    width: '350px'
  },
  imageContainer: {
    flexShrink: 0,
    borderRadius: '50%',
    overflow: 'hidden',
    width: '80px',
    height: '80px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  songInfo: {
    marginLeft: '10px',
    flex: 1,
  },
  artistName: {
    margin: 0,
    fontSize: '0.9em',
    color: '#555',
  },
  songTitle: {
    margin: 0,
    fontSize: '1.1em',
    color: '#333',
  },
  playButton: {
    marginLeft: '10px',
    flexShrink: 0,
  },
  playIcon: {
    backgroundColor: '#5A5A73',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
};
