import styles from './Button.module.css'
import { PlusCircle } from "phosphor-react";

export default function Button() {
  return (
    <div className={styles.container}>
      <button type="submit" ><PlusCircle className={styles.imgAddTask} size={19} />Criar</button>
    </div>
  )
}

