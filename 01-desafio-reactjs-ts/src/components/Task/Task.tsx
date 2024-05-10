import { Trash } from "phosphor-react";
import { Fragment } from "react";

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

export const Task = () => {
  return (
    <Fragment>
      <header>
        <div>
          <input type="checkbox" />
          <p>
            Não vou copiar código nenhum já pronto! Vai ser tudo do jeito
            antigo, apenas documentação e oração.
          </p>
        </div>
        <button title="Deletar Tarefa!">
          <Trash size={24} />
        </button>
      </header>
    </Fragment>
  );
};
