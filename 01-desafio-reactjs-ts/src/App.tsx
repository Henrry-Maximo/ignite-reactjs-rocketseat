import React from "react";
import { PlusCircle } from "phosphor-react";

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

import Clipboard from "./assets/Clipboard.png";

function App() {
  // const [newTextTask, setNewTextTask] = useState([""]);

  

  const postTask = [{
    id: 1,
    task: {
      isFalse: false,
      description: "Estudar ReactJS para construir aplicações."
    }
  },
  {
    id: 2,
    task: {
      isFalse: false,
      description: "Não usar chatGPT."
    }
  },
  {
    id: 3,
    task: {
      isFalse: false,
      description: "Apenas usar projetos da aula."
    }
  }
];

  return (
    // sintaxe mais limpa no HTML
    <React.Fragment>
      <Header />
      <main className={styles.formTask}>
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
        <article className={styles.postTask}>
          <div className={styles.listTasks}>
            <p>
              <span className={styles.countTaskCreated}>Tarefas criadas</span>
              <strong>5</strong>
            </p>
            <p>
              <span className={styles.countTaskCompleted}>Concluídas</span>
              <strong>2 de 5</strong>
            </p>
          </div>
          <div className={styles.postAllTask}>
            {postTask.map((line) => {
              return (<Task key={line.id} title={line.task.description}></Task>)
            })}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
