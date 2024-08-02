import { ClipboardText } from 'phosphor-react'
import styles from './NotTask.module.css'

export function NotTask() {
  return (
    <div className={styles.withoutTasks}>
      <span>
        <ClipboardText size={62} />
      </span>
      <div>
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
