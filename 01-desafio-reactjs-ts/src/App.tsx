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
    status: false,
    description: "Estudar ReactJS para construir aplicações.",
  },
];

function App() {
  const [newTask, setNewTask] = useState<TasksProps[]>(postTask); // valor local
  const [getNewTask, setGetNewTask] = useState(""); // valor digitado

  // handle -> disparado pelo usuário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNewTask([
      ...newTask,
      {
        id: newTask.length + 1,
        status: false,
        description: getNewTask,
      },
    ]);
    setGetNewTask("");
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = newTask.filter((row) => {
      return row.id !== taskToDelete;
    });

    setNewTask(tasksWithoutDeletedOne);
  }

  function handleNewTaskChange(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setGetNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: React.InvalidEvent<HTMLInputElement>) {
    // prototype > propriedade: customizar título do inValid
    event.target.setCustomValidity("Esse campo é obrigatório.");
  }

  function onAmountTask() {
    return newTask.length;
  }

  function completedTask(taskId: number, completed:boolean) {
    setNewTask(newTask.map(row => row.id === taskId ? { ...row, status: completed} : row))
    console.log(newTask);
  }

  // variáveis auxiliares
  const isNewTaskEmpty = getNewTask.length === 0;

  return (
    <React.Fragment>
      <Header />
      <main className={styles.formTask}>
        <form onSubmit={handleCreateNewTask} className={styles.sendTask}>
          <input
            name="task"
            type="text"
            value={getNewTask}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma Nova Tarefa"
            onInvalid={handleNewTaskInvalid}
            className={styles.inputTask}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar <PlusCircle className={styles.imgAddTask} size={19} />
          </button>
        </form>
        <article className={styles.postTask}>
          <CountTask onCountTask={onAmountTask()} />
          <div className={styles.postAllTask}>
            {(newTask.length > 0 &&
              newTask.map((line) => {
                return (
                  <Task
                    key={line.id}
                    rows={line}
                    // on => quando
                    onDeleteTask={deleteTask}
                    onCompletedTask={completedTask}
                  ></Task>
                );
              })) || (
              <div>
                <h2>Você ainda não tem tarefas cadastradas</h2>
                <br />
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
