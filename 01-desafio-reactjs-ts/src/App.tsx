import React, { useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react";

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

function App() {
  const [newTextTask, setNewTextTask] = useState([""]);

  const postTask = "";
  // [
  //   {
  //     // id: 1,
  //     // description:
  //     //   "Não vou copiar código nenhum já pronto! Vai ser tudo do jeito antigo, apenas documentação e oração.",
  //   },
  // ];

  return (
    // sintaxe mais limpa no HTML
    <React.Fragment>
      <Header />
      <main>
        <div className={styles.sendTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.inputTask}
          />
          <button className={styles.buttonCreatedTask}>
            Criar <PlusCircle className={styles.imgAddTask} size={19} />
          </button>
        </div>
        <article>
          <div className={styles.listTasks}>
            <p>
              <span className={styles.countTaskCreated}>Tarefas criadas</span>
              <strong>5</strong>
            </p>
            <p>
              <span>Concluídas</span>
              <strong>2 de 5</strong>
            </p>
          </div>
          <div className={styles.postAllTask}>
            {postTask ? (
              <Task />
            ) : (
              <>
                <div>
                  <ClipboardText size={64} />
                </div>
                <div>
                  <span>Você ainda não tem tarefas cadastradas.</span>
                  <br />
                  <span>Crie tarefas e organize seus itens a fazer.</span>
                </div>
              </>
            )}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
