import React, { useEffect, useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react";
import Cookies from "js-cookie";
// import { v4 as uuidv4 } from 'uuid';

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { TasksProps } from "./components/Task/Task.jsx";
import { CountTask } from "./components/CountTask/CountTask.js";
import Lofi from "./components/Lofi/Lofi.js";



// const postTask: TasksProps[] = [
//   {
//     id: 1,
//     status: false,
//     description: "Estudar ReactJS para construir aplicações.",
//   },
// ];

function App() {
  const [newTask, setNewTask] = useState<TasksProps[]>([]); // valor local
  const [getNewTask, setGetNewTask] = useState(""); // valor digitado

  // Tarefas dos cookies
  useEffect(() => {
    const cookieTasks = Cookies.get("tasks");
    // console.log("2 vezes");
    if (cookieTasks) {
      setNewTask(JSON.parse(cookieTasks));
    }
  }, []);

  // handle -> disparado pelo usuário
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTaskItem: TasksProps = {
      id: Date.now(), // Gera um identificador único do tipo number
      status: false,
      description: getNewTask,
    };

    const updatedTasks = [...newTask, newTaskItem];
    Cookies.set("tasks", JSON.stringify(updatedTasks));
    setNewTask(updatedTasks);
    setGetNewTask("");
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = newTask.filter((row) => {
      return row.id !== taskToDelete;
    });
    Cookies.set("tasks", JSON.stringify(tasksWithoutDeletedOne));
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

  function completedTask(taskId: number, completed: boolean) {
    const updatedTasks = newTask.map((row) =>
      row.id === taskId ? { ...row, status: completed } : row
    );
    // console.log(updatedTasks);
    Cookies.set("tasks", JSON.stringify(updatedTasks));
    setNewTask(updatedTasks);
  }

  // calcular o total de tarefas
  const totalTasks = newTask.length;

  // calcular o total de tarefas concluídas
  const completedTasks = newTask.filter((task) => task.status).length;

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
        <Lofi />
        <article className={styles.postTask}>
          <CountTask totalTasks={totalTasks} completedTasks={completedTasks} />
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
              <div className={styles.withoutTasks}>
                <span>
                  <ClipboardText size={62} />
                </span>
                <div>
                  <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                  </p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
