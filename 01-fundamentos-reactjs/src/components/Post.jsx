import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

// não seria performático para o react ficar observando a variável
// const comments = [
//   1,
//   2,
// ];

// estado = variáveis que eu quero que o componente monitore

export function Post({ author, publishedAt, content }) {
  // manipulação de datas
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  // padrão: nome da variável anterior + "set em camelCase"
  // obs.: usar estado, siginifica inicializar com o formato 
  // que os dados posteriores viram.
  const [newCommentText, setNewCommentText] = useState('');

  // maniupalação de datas com date-fns
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    // capturar novo comentário
    // const newCommentText = event.target.comment.value;

    // event.target: retorna o formulário / sempre retorna o elemento que está recebendo o evento
    // console.log(event.target.comment.value)

    // imutabilidade: passar um novo valor
    // setComments([1, 2, 3, 4, 5]);

    // spread operator: copiar os valores existentes
    // manter os valores e inserir os novos.
    setComments([...comments, newCommentText]);
    setNewCommentText('');

    // limpar box
    // event.target.comment.value = '';
  }

  // capturando alterações no textarea
  function handleNewCommentChange() {
    // console.log(event.target.value);
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            // hasBorder={true}
            className={styles.avatar}
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        {/* obs.: atributo do HTML com mais que uma palavra. No react, será um CAMELCASE. */}
        {/* tag time: permite a propriedade dateTime */}
        {/* tag title: orientar o usuário sobre datas longas */}
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {/* intl: formtação de data / numéro / pluralização /  listas */}
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.link === "link") {
            return (
              <p key={item.content}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe deu feedback</strong>
        <textarea name="comment" value={newCommentText} onChange={handleNewCommentChange} placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />;
        })}
      </div>
    </article>
  );
}
