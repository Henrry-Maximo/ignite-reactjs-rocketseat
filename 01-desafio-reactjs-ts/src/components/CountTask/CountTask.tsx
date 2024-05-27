import styles from "./CountTask.module.css"

export const CountTask = () => {
  return (
    <>
      <div className={styles.listTasks}>
        <p>
          <span className={styles.countTaskCreated}>Tarefas criadas</span>
          <strong>5</strong>
        </p>
        <p>
          <span className={styles.countTaskCompleted}>Concluídas</span>
          <strong>2 de 5</strong>
        </p>
      </div>
    </>
  );
};
