import styles from "./Input.module.css";

export default function Input() {
  return (
    <input
      type="text"
      placeholder="Adicione uma Nova Tarefa"
      className={styles.inputTask}
      required
    ></input>
  );
}
