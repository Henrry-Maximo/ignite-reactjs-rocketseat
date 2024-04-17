import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99754637?v=4",
      name: "Henrique Maximo",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Olá, tudo bem?" },
      {
        type: "paragraph",
        content:
          "Este projeto está sendo desenvolvido como parte das aulas de ReactJS na Rocketseat. Muito top!",
      },
      { link: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-15 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa!" },
      {
        type: "paragraph",
        content: "Projeto desenvolvido nas aulas de ReactJS na Rocketseat.",
      },
      { link: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-04-10 20:00:00"),
  },
];

// iteração: estrutura de repetição / percorrer o array
// void: não tem retorno
// const thing = posts.forEach(post => {});
// const thing = posts.map(post => {
//   return 1;
// })

// JSX = JavaScript + XML
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* percorre um array; porém não retorna nada (undefined) */}
          {posts.map((post) => {
            return (
            <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          );
          })}
        </main>
      </div>
    </>
  );
}
