import React from 'react';
import styles from './Hero.module.scss';

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>{props.text}</h1>
      </div>
    </div>
  )
}