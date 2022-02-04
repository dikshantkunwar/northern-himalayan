import React from 'react';
import styles from './Hero.module.scss';

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        {/* <img src='/nh-hero.png' /> */}
        <img 
          src='/nh-hero-resize2.png' 
          style={
            { maxWidth: '500px', 
              padding: '20px' }
          }
          />
        <h1 style={{padding: '50px'}}>{props.text}</h1>
      </div>
    </div>
  )
}