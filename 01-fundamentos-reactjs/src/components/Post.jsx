import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {
  // manipulação de datas
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  // maniupalação de datas com date-fns
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


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
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
         {/* intl: formtação de data / numéro / pluralização /  listas */}
         {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === "paragraph") {
            return (
              <p>{item.content}</p>
            )
          } else if (item.link === "link") {
            return (
              <p><a href="">{item.content}</a></p>
            )
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe deu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer><button type="submit">Publicar</button></footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
