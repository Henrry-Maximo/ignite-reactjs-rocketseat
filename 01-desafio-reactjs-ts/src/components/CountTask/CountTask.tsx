import styles from "./CountTask.module.css"

export const CountTask = ({onCountTask}) => {
  return (
    <>
      <div className={styles.listTasks}>
        <p>
          <span className={styles.countTaskCreated}>Tarefas criadas</span>
          <strong>{onCountTask}</strong>
        </p>
        <p>
          <span className={styles.countTaskCompleted}>Concluídas</span>
          <strong>2 de 5</strong>
        </p>
      </div>
    </>
  );
};
