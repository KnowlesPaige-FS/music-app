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
    
  },
  coverImage: {
    
  },
  songInfo: {
    
  },
  songTitle: {
    
  },
  artistName: {
    
  },
  playButton: {
    
  },
  playIcon: {
    
  },
  playIconHover: {
    
  },
};

