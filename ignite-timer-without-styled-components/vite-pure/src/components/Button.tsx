import styles from "./Button.module.css";
import { ButtonContainer, type ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export const  Button = ({ variant = "primary" }: ButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[variant]}`}>enviar</button>

      <ButtonContainer variant={variant}>enviar</ButtonContainer>
    </>
  );
};
