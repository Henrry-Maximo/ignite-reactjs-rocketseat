import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

// declarando os tipos
export interface TasksProps {
  id: number,
  task: {
    status: boolean,
    description: string,
  }
}

/* 
Informações retidas em post usam a tipagem estática
da interface TasksProps - definição dos tipos
post : informação
tasksprops : tipo
estrutura de dados em diferentes níveis
*/
interface TaskProps {
  rows: TasksProps
  onDeleteTask: (task: string) => void;
}

export const Task = ({rows, onDeleteTask}: TaskProps) => {

  function handleDeleteTask() {
    onDeleteTask(rows.id);
  }

  return (
    <div className={styles.boxTask}>
      <div className={styles.content}>
        <input type="checkbox" className={styles.boxCheck}/>
        <p>{rows.task.description}</p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar Tarefa!" className={styles.trashBtn}>
        <Trash size={24} />
      </button>
    </div>
  );
}
