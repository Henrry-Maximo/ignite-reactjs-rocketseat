import { MouseEventHandler, ReactElement } from "react";
import styles from "./Toggle.module.css";

interface ToggleProps {
  HandlerEventMusic: MouseEventHandler<HTMLButtonElement>,
  icon: ReactElement;
}

export function Toggle({ HandlerEventMusic, icon }: ToggleProps) {
  return (
    <div className={styles.wrapperPlay}>
      <button onClick={HandlerEventMusic}>
        {icon}
      </button>
    </div>
  );
}
