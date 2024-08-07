import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

// declarando os tipos
export interface TasksProps {
  id: number
  status: boolean
  description: string
}

export type OnCompletedTask = (taskId: number, completed: boolean) => void

/* 
Informações retidas em post usam a tipagem estática
da interface TasksProps - definição dos tipos
post : informação
tasksprops : tipo
estrutura de dados em diferentes níveis
*/

interface TaskProps {
  rows: TasksProps
  onDeleteTask: (id: number) => void
  onCompletedTask: OnCompletedTask
}

export function Task({ rows, onDeleteTask, onCompletedTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(rows.id)
  }

  function isTrueOrFalse(event: React.ChangeEvent<HTMLInputElement>) {
    onCompletedTask(rows.id, event.target.checked)
    return event.target.checked
  }

  const lineDeactivatedWhenCheck = rows.status ? styles.completed : ''

  return (
    <div className={styles.boxTask}>
      <div className={styles.content}>
        <div>
          <input
            type="checkbox"
            className={styles.boxCheck}
            onChange={isTrueOrFalse}
            checked={rows.status}
            name="box"
          />
        </div>
        <p className={lineDeactivatedWhenCheck}>{rows.description}</p>
      </div>
      <button
        onClick={handleDeleteTask}
        title="Deletar Tarefa!"
        className={styles.trashBtn}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
