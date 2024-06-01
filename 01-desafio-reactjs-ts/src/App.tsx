import React, { useState } from "react";
import { PlusCircle } from "phosphor-react";

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { TasksProps } from "./components/Task/Task.jsx";
import { CountTask } from "./components/CountTask/CountTask.js";

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
];

function App() {
  const [newTask, setNewTask] = useState<TasksProps[]>(postTask);

  const [getNewTask, setGetNewTask] = useState([""]);

  function deleteTask(taskToDelete: number) {
    // console.log(`Deletar task: ${taskToDelete}`);
    // filter -> se for false, não retorna
    // retornar em uma nova lista aquilo que não foi selecionado
    const tasksWithoutDeletedOne = newTask.filter((row) => {
      return row.id !== taskToDelete;
    });

    setNewTask(tasksWithoutDeletedOne);
  }

  // handle -> disparado pelo usuário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    // elemento que tá recebendo aquele evento
    // event.target
    const newTaskTest = event?.target.task.value;
    // console.log(event?.target.task.value)

    setNewTask([
      ...newTask,
      {
        id: newTask.length + 1,
        task: {
          status: false,
          description: newTaskTest,
        },
      },
    ]);
    setGetNewTask([""]);
  }

  function handleNewTask(event: React.InvalidEvent<HTMLInputElement>) {
    event?.target.setCustomValidity("")
    setGetNewTask(event?.target.value);
  }

  function handleNewTaskInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    // prototype > propriedade: customizar título do inValid
    event?.target.setCustomValidity("Esse campo é obrigatório.");
  }

  return (
    <React.Fragment>
      <Header />
      <main className={styles.formTask}>
        <form onSubmit={handleCreateNewTask} className={styles.sendTask}>
          <input
            name="task"
            type="text"
            value={getNewTask}
            onChange={handleNewTask}
            placeholder="Adicione uma Nova Tarefa"
            onInvalid={handleNewTaskInvalid}
            className={styles.inputTask}
            required
          />
          <button className={styles.buttonCreatedTask}>
            Criar <PlusCircle className={styles.imgAddTask} size={19} />
          </button>
        </form>
        <article className={styles.postTask}>
          <CountTask />
          <div className={styles.postAllTask}>
            {newTask.map((line) => {
              return (
                <Task
                  key={line.id}
                  rows={line}
                  // on => quando
                  onDeleteTask={deleteTask}
                ></Task>
              );
            })}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
