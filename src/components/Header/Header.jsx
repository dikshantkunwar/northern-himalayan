import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.root}>
      <div>
        <img src='/Logo2_crop_2022.png' style={{ maxHeight: '140px', maxWidth: '180px' }} />
      </div>

      <div>
        <a href='/about'>About</a>
        <a href='/menu'>Menu</a>
        <a href='/contact'>Contact</a>
      </div>
    </header>
  )
}