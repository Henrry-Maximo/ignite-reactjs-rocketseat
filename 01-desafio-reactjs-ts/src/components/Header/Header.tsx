import styles from './Header.module.css'

import igniteTodo from '../../assets/Logo.png'

export const Header = () => {
  return (
    <header className={styles.headerBackground}>
      <img src={igniteTodo} alt="logo todo" />
    </header>
  )
}
