import styles from './Input.module.css'

export default function Input({
  type,
  placeholder,
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.inputTask}
        {...rest}
        required
      />
    </>
  )
}
