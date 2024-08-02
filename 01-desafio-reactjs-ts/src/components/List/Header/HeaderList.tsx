import styles from './HeaderList.module.css'

// type => only number
interface TypeTask {
  totalTasks: number
  completedTasks: number
}

export const HeaderList = ({ totalTasks, completedTasks }: TypeTask) => {
  return (
    <>
      <header className={styles.listTasks}>
        <aside>
          <p className={styles.countTaskCreated}>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </aside>
        <aside>
          <p className={styles.countTaskCompleted}>Concluídas</p>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </aside>
      </header>
    </>
  )
}
