import styles from './MenuItem.module.scss';

export default function MenuItem(props) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuTop}>
        <h4>{props.itemName}</h4>
        <div>{props.itemPrice}</div>
      </div>
      <p className={styles.menuDescription}>{props.itemDescription}</p>
    </div>
  )
}