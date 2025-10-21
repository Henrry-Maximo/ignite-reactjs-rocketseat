import styles from "./Button.module.css";

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export const Button = ({ color = 'primary' }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`}>
      enviar
    </button>
  );
}