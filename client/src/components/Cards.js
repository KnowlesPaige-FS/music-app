/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Cards = props => {
    return (
        <article className="text-center" style={styles.card}>
            <section style={{ ...styles.cardImg, backgroundImage: `url(${props.img})` }}>
                <div style={styles.overlay}></div>
                <div style={styles.info}>
                    <h4 style={styles.title}>{props.title}</h4>
                </div>
            </section>
        </article>
    );
}

export default Cards;

const styles = {
    card: {
        
    },
    cardImg: {
       
    },
    overlay: {
        
    },
    info: {
      
    },
    title: {
        
    },
};
