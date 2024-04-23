import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

// O objeto corresponde as propriedades do post
export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

// reaproveitamento de código - interface (posts):
interface PostProps {
  post: PostType;
}


/*
  ## EVENT:
 Para o TypeScript, a propriedade "event" é desconhecida. Então,
 nesses casos, quando utilizamos funções que vem através de evento. Automaticamente,
 o html passa para essas funções, como primeiro parâmtro, o "event".

 Obs.: especificar o tipo do evento, para que seja possível a importação de
 suas funções. Deixando assim, o editor código mais inteligente.

 Ex.: function handleCreateNewComment(event: FormEvent) {}
*/ 

/*
## extensão de interfaces - reutilização de tipo:
- Eliminar argumentos do PostProps, e estabelecer que recebe
somente uma propriedade: "posts" da interface PostType.
- A interface PostType mantem as propriedades utilizadas e
seus respectivos tipos. 
*/


export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  // Obs.: como não é disparado pelo form, precisamos avisar o TypeScript
  // TypeScript funcionamento interno: generics (por qual elemento foi disparado?)
  // html (event) --> função recebe event --> o que é? --> disparado por?
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setNewCommentText(event.target.value);
  }

  function handleNewConnectInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Campo obrigatório para envio.');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment=> {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            // className={styles.avatar}
            src={post.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
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
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewConnectInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
