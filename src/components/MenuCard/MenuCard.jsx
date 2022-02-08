import React from 'react';
import MenuItem from '../MenuItem';
import styles from './MenuCard.module.scss';

export default function MenuCard(props) {

  const menuItems = props.menuItems.map( (item) => {
    if (item.menuType === props.cardHeader) {
      return (
      <MenuItem 
        itemName={item.itemName} 
        itemPrice={item.itemPrice} 
        itemDescription={item.description}
      />
      )
    }
  })
  return (
    <div className={styles.menuCard}>
      <h3>{props.cardHeader}</h3>
      {menuItems}
    </div>
  )
}