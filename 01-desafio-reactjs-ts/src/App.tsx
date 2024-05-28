import React, { useState } from "react";
import { PlusCircle } from "phosphor-react";

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { TasksProps } from "./components/Task/Task.jsx";

const postTask: TasksProps[] = [
  {
    id: 1,
    task: {
      status: false,
      description: "Estudar ReactJS para construir aplicações.",
    },
  },
  {
    id: 2,
    task: {
      status: false,
      description: "Não usar chatGPT.",
    },
  },
  {
    id: 3,
    task: {
      status: false,
      description: "Apenas usar projetos da aula.",
    },
  },
];

function App() {
  const [newTask, setNewTask] = useState([""]);

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = newTask.filter(row => {
      return row != taskToDelete;
    });
    setNewTask(tasksWithoutDeletedOne);
  }

  return (
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
          <div className={styles.postAllTask}>
            {postTask.map((line) => {
              return <Task key={line.id} rows={line} onDeleteTask={deleteTask}></Task>;
            })}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
