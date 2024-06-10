import styles from "./CountTask.module.css"

interface countTask {
  totalTasks: number,
  completedTasks: number
}

export const CountTask = ({totalTasks, completedTasks}: countTask) => {
  return (
    <>
      <div className={styles.listTasks}>
        <p>
          <span className={styles.countTaskCreated}>Tarefas criadas</span>
          <strong>{totalTasks}</strong>
        </p>
        <p>
          <span className={styles.countTaskCompleted}>Concluídas</span>
          <strong>{completedTasks} de {totalTasks}</strong>
        </p>
      </div>
    </>
  );
};
