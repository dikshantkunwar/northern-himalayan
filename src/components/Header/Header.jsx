import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.root}>
      <div>
        <h1><img src='/Logo2_2022.png' style={{ maxHeight: '220px', maxWidth: '220px' }} /></h1>
      </div>

      <div>
        <a href='/about'>About</a>
        <a href='/menu'>Menu</a>
        <a href='/contact'>Contact</a>
      </div>
    </header>
  )
}