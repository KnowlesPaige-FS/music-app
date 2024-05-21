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
    
  },
  imageContainer: {
    
  },
  image: {
    
  },
  songInfo: {
    
  },
  artistName: {
    
  },
  songTitle: {
    
  },
  playButton: {
    
  },
  playIcon: {
    
  },
};
