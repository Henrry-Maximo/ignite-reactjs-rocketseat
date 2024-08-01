import React, { useEffect, useState } from "react";

// library
import { ClipboardText} from "phosphor-react";
import Cookies from "js-cookie";

// styles
import "./global.css";
import styles from "./App.module.css";

// type
import { TasksProps } from "./components/Task/Task";

// COMPONENTS

// header 
import { Header } from "./components/Header/Header";
import { HeaderList } from "./components/List/Header/HeaderList"

// registration task
import Input from "./components/Input/Input.js";
import Button from "./components/Button/Button.js";


import { Task } from "./components/Task/Task";
import Lofi from "./components/Music/Lofi";



export default function App() {
  const [newTask, setNewTask] = useState<TasksProps[]>([]); // valor local
  const [getNewTask, setGetNewTask] = useState(""); // valor digitado

  // Tarefas dos cookies
  useEffect(() => {
    const cookieTasks = Cookies.get("tasks");

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

  // function handleNewTaskChange(event: React.InvalidEvent<HTMLInputElement>) {
  //   event.target.setCustomValidity("");
  //   setGetNewTask(event.target.value);
  // }

  // function handleNewTaskInvalid(event: React.InvalidEvent<HTMLInputElement>) {
  //   // prototype > propriedade: customizar título do inValid
  //   event.target.setCustomValidity("Esse campo é obrigatório.");
  // }

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
          <Input
            onChange={(e) => setGetNewTask(e.target.value)}
            value={getNewTask}
            name="task"
            type="text"
            placeholder="Adicione uma Nova Tarefa"
            // onInvalid={handleNewTaskInvalid}
          />
          <Button activateTaskButton={isNewTaskEmpty} />
        </form>
        <Lofi />
        <article className={styles.postTask}>
          <HeaderList totalTasks={totalTasks} completedTasks={completedTasks} />
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
