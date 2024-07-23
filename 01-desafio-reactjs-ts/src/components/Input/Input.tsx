import styles from "./Input.module.css";

export default function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <>
      <input
        type="text"
        placeholder="Adicione uma Nova Tarefa"
        className={styles.inputTask}
        {...rest}
        required
      />
    </>
  );
}
