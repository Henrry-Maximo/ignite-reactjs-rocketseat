import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  // like: vai mudar de acordo com a ação do usuário;
  // utilizar o estado, inicializando com um valor (valor do mesmo tipo)
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    // Soluções para resolver o problema de tentar utilizar o valor atualizado 
    // de uma variável do estado, sem que está retorno o valor antigo:

    const newLikeCount = likeCount + 1;

    setLikeCount(newLikeCount);
    setLikeCount(newLikeCount + 1);

    // Segunda solução (atualizar o estado):

    setLikeCount((state) => {
      // dentro desta função, retornar o valor
      // através desta função, podemos declarar um argumento e 
      // obter o valor mais recente
      return state + 1;
    });

    // obs.: sempre que você for atualizar uma informação, e essa depende
    // do valor que já existia, ou seja, depende dela mesma. Utilizar funções
  }

  // deletar comentário do componente pai
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      {/* utilizar chaves em volta / booleano não existe no html */}
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/99754637?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Maximo</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          {/* 
            handleLikeComment vs handleLikeComment()

            handleLikeComment: vai executar quando for chamado

            handleLikeComment(): vai executar assim que o código for 
            inicializado, ocasionando um infinite loop, pois sua operação
            inicializa com o valor 0 e vai acrescentando +1 a cada execução.
            Ex.: <button onClick={setLikeCount(likeCount + 1)}></button> 

            // obs.: todos os eventos do react esperam uma função, como 
            propriedade, como valor e não a execução dessa função;

            Como executar?: utilizar arrow function para transformar em
            uma função.
            Ex.: <button onClick={() => setLikeCount(likeCount + 1)}>
            
            onClick: quando o usuário clicar, vai executar

          */}
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
