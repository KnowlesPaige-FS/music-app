/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Circle = props => {
  return (
    <div className="circle-component" style={styles.circleComponent}>
      <img style={styles.circleImage} src={props.image} alt={props.artistName} />
      <p style={styles.artistName}>{props.artistName}</p>
    </div>
  );
};

export default Circle;

const styles = {
  circleComponent: {
    
  },
  circleImage: {
    
  },
  artistName: {
    
  },
};
