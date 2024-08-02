import styles from './Button.module.css'
import { PlusCircle } from 'phosphor-react'

interface ButtonProps {
  activateTaskButton: boolean
}

export default function Button({ activateTaskButton }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button type="submit" disabled={activateTaskButton}>
        <PlusCircle className={styles.imgAddTask} size={19} />
        Criar
      </button>
    </div>
  )
}
