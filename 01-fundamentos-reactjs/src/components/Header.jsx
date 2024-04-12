// obs.: componentes devem ter a primeira letra em maiúsculos para
// não confundir, como por exemplo, a tag header do próprio html

// module: precisa de nome
import styles from "./Header.module.css";

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite"/><strong>Ignite Feed</strong>
    </header>
  );
}
