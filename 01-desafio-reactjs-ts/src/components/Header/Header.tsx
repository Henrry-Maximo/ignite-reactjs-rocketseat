import styles from './Header.module.css'

// image background header
import igniteTodo from '../../assets/Logo.png'

export const Header = () => {
  return (
    <header className={styles.headerBackground}>
      <img src={igniteTodo} />
    </header>
  )
}
