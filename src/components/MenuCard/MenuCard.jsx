import MenuItem from '../MenuItem';
import styles from './MenuCard.module.scss';

export default function MenuCard(props) {

  const menuItems = props.menuItems.map( (item) => {
    return (
    <MenuItem 
      itemName={item.name} 
      itemPrice={item.price} 
      itemDescription={item.description}
    />
    )
  });

  return (
    <div className={styles.menuCard}>
      <h3 className={styles.cardHeader}>{props.cardHeader}</h3>
      {menuItems}
    </div>
  )
}