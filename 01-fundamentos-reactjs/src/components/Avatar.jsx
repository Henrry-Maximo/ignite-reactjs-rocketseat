import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  // const hasBorder = props.hasBorder !== false;

  // arrancar o dado de dentro deste objeto
  // const { hasBorder } = props;

  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        // src={props.src}
        src={src}
      />
    </div>
  );
}
