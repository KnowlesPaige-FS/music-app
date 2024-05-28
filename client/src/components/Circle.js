/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Circle = ({ image, title }) => {
  return (
    <div className="circle-component" style={styles.circleComponent}>
      <img src={image} alt={title} style={styles.circleImage}/>
      <p style={styles.title}>{title}</p>
    </div>
  );
};

export default Circle;

const styles = {
  circleComponent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2% 2% 0',
  },
  circleImage: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  title: {
    marginTop: '2%',
    width: '110px',
    fontSize: '1em',
    textAlign: 'center',
    // color: '#212529',
    color: '#E5E5E5'
  },
};
