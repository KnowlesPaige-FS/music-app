/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Circle = props => {
  return (
    <div className="circle-component" style={styles.circleComponent}>
      <img style={styles.circleImage} src={props.image} alt={props.title} />
      <p style={styles.title}>{props.title}</p>
    </div>
  );
};

export default Circle;

const styles = {
  circleComponent: {
    
  },
  circleImage: {
    
  },
  title: {
    
  },
};
