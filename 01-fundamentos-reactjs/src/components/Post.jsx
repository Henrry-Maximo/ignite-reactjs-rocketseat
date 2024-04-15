import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/99754637?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Maximo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        {/* obs.: atributo do HTML com mais que uma palavra. No react, será um CAMELCASE. */}
        {/* tag time: permite a propriedade dateTime */}
        {/* tag title: orientar o usuário sobre datas longas */}
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa!</p>
        <p>Lorem ipsum dolor sit amet. </p>
        <p>
          Os operadores gráficos e tipográficos sabem disso bem, na realidade,
          todas as profissões que lidam com o{" "}
        </p>
        <p>
          universo da comunicação têm um relacionamento estável com essas
          <a href="#">{' '}palavras</a>, mas o que é?{" "}
        </p>
        <p><a href="#">Lorem ipsum é um texto fofo sem qualquer sentido.</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
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
