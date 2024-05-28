/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Cards = props => {
    return (
        <article className="text-center" style={styles.card}>
            <section style={{ ...styles.cardImg, backgroundImage: `url(${props.img})` }}>
            </section>
            <section style={styles.info}>
                <h4 style={styles.title}>{props.title}</h4>
            </section>
        </article>
    );
}

export default Cards;

const styles = {
    card: {
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        margin: '2%',
        background: '#E5E5E5'
    },
    cardImg: {
        width: '100%',
        height: '250px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    info: {
        width: '100%',
        padding: '4%',
    },
    title: {
        margin: 0,
        fontSize: '1em',
        color: '#212529',
    },
};
