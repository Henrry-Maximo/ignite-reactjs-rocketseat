import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = ({title}) => {
  return (
    <div className={styles.boxTask}>
      <div className={styles.content}>
        <input type="checkbox" className={styles.boxCheck}/>
        <p>{title}</p>
      </div>
      <button title="Deletar Tarefa!" className={styles.trashBtn}>
        <Trash size={24} />
      </button>
    </div>
  );
}
