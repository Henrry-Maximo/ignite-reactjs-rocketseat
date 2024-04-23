import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

// Obs.: utilizar "?" para tornar o tipo opcional no objeto

/*
Remoção das propriedades devido à extensão ImgHTMLAttributes 
(carrega todos os elementos da img)
src: string;
alt?: string;
title?: string

obs.: é necessário especificar o "generics", impotar o html.
*/
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

/*
  Imagine que, na tag img, temos diversos atributos; porém, utilizando
  componentes, precisamos declarar as proriedades para uso. Então, quer dizer,
  que vamos ter que criar cada um?

  Interfaces de atributos do TypeScript (extensão):
  ## ImgHTMLAttributes

  ## Rest Operator: 
  - eliminar os argumentos e inserir: "...props". 
  Compreensão: retornar o resto dos dados do componente (retornar as propriedades)
  Obs.: no caso, remover "hasBorder" do objeto e me 
  retorna o restante em "...props".
*/

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  // const hasBorder = props.hasBorder !== false;

  // arrancar o dado de dentro deste objeto
  // const { hasBorder } = props;

  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        /*
        // propriedade:
        // src={props.src}

        // desestruturando propriedade:
        // src={src}
        // alt={alt}
        // title={title}

        // rest operator:
        {...props}
        */
        {...props}
      />
    </div>
  );
}
