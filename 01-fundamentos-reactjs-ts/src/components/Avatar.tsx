import styles from "./Avatar.module.css";

// Obs.: utilizar "?" para tornar o tipo opcional no objeto

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
  title?: string
}

/*
  Imagine que, na tag img, temos diversos atributos; porém, utilizando
  componentes, precisamos declarar as proriedades para uso. Então, quer dizer,
  que vamos ter que criar cada um?

  Interfaces de atributos do TypeScript:
  ## ImgHTMLAttributes
*/

export function Avatar({ hasBorder = true, src, alt, title }: AvatarProps) {
  // const hasBorder = props.hasBorder !== false;

  // arrancar o dado de dentro deste objeto
  // const { hasBorder } = props;

  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        // src={props.src}
        src={src}
        alt={alt}
        title={title}
      />
    </div>
  );
}
