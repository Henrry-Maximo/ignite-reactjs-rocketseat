import styles from './Header.module.css';
import igniteTodo from '../../assets/Logo.png';

export const Header = () => {
  return (
    <> 
    <div className={styles.headerBackground}>
      <img src={igniteTodo} />
    </div>
    </>
  )
}