import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

// declarando os tipos
export interface TasksProps {
  id: number;
  status: boolean;
  description: string;
}

// export interface CompletedTask {
//   id: number, 
//   completed: boolean
// }

export type OnCompletedTask = (taskId: number, completed: boolean) => void;

/* 
Informações retidas em post usam a tipagem estática
da interface TasksProps - definição dos tipos
post : informação
tasksprops : tipo
estrutura de dados em diferentes níveis
*/
interface TaskProps {
  rows: TasksProps;
  onDeleteTask: (id: number) => void;
  onCompletedTask: OnCompletedTask;
}

export const Task = ({ rows, onDeleteTask, onCompletedTask }: TaskProps) => {
  function handleDeleteTask() {
    onDeleteTask(rows.id);
  }

  function isTrueOrFalse(event: React.ChangeEvent<HTMLInputElement>) {
    onCompletedTask(rows.id, event.target.checked);
  }

  return (
    <div className={styles.boxTask}>
      <div className={styles.content}>
        <input
          type="checkbox"
          className={styles.boxCheck}
          onChange={isTrueOrFalse}
          name="box"
        />
        <p>{rows.description}</p>
      </div>
      <button
        onClick={handleDeleteTask}
        title="Deletar Tarefa!"
        className={styles.trashBtn}
      >
        <Trash size={24} />
      </button>
    </div>
  );
};
