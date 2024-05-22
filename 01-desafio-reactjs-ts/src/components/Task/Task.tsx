import { Trash } from "phosphor-react";
import { Fragment } from "react";

import styles from "./Task.module.css";

// const posts = [
//   {
//     id: 1,
//     author: {
//       avatarUrl: "https://avatars.githubusercontent.com/u/99754637?v=4",
//       name: "Henrique Maximo",
//       role: "Web Developer",
//     },
//     content: [
//       { type: "paragraph", content: "Olá, tudo bem?" },
//       {
//         type: "paragraph",
//         content:
//           "Este projeto está sendo desenvolvido como parte das aulas de ReactJS na Rocketseat. Muito top!",
//       },
//       { type: "link", content: "jane.design/doctorcare" },
//     ],
//     publishedAt: new Date("2024-04-15 20:00:00"),
//   },
//   {
//     id: 2,
//     author: {
//       avatarUrl: "https://github.com/diego3g.png",
//       name: "Diego Fernandes",
//       role: "CTO @Rocketseat",
//     },
//     content: [
//       { type: "paragraph", content: "Fala galeraa!" },
//       {
//         type: "paragraph",
//         content: "Projeto desenvolvido nas aulas de ReactJS na Rocketseat.",
//       },
//       { type: "link", content: "jane.design/doctorcare" },
//     ],
//     publishedAt: new Date("2024-04-10 20:00:00"),
//   },
// ];

export function Task({ title }) {
  return (
    <div className={styles.boxTask}>
      <div className={styles.content}>
        <input type="checkbox" />
        <p>{title}</p>
      </div>
      <button title="Deletar Tarefa!" className={styles.trashBtn}>
        <Trash size={24} />
      </button>
    </div>
  );
}
