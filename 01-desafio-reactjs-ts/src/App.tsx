import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import './global.css'
import styles from './App.module.css'

import { TasksProps, Task } from './components/List/Task/Task.js'
import { Header } from './components/Header/Header'
import { HeaderList } from './components/List/Header/HeaderList'

import { NotTask } from './components/FormNotTask/NotTask.js'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import Lofi from './components/Music/Lofi'

/*
  ## Anotações Importantes sobre o Código:

  - estados (state hook - useState):
    - inicializar um array vazio importando o tipo de task, aguardando por mais
    - inicializar um valor do tipo string vazio, esperando o usuário digitar
  - handle (disparo) -> usuário fez uma solicitação
*/

export default function App() {
  const [tasksList, setTasksList] = useState<TasksProps[]>([])
  const [taskDescription, setTaskDescription] = useState('')

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    // evita recarregar a página:
    event.preventDefault()

    const newTaskItem: TasksProps = {
      id: Date.now(), // Gera um identificador único do tipo number
      status: false,
      description: taskDescription,
    }

    const updatedTasks = [...tasksList, newTaskItem]
    Cookies.set('tasks', JSON.stringify(updatedTasks))
    setTasksList(updatedTasks)
    setTaskDescription('')
  }

  // Tarefas dos cookies
  useEffect(() => {
    const cookieTasks = Cookies.get('tasks')

    if (cookieTasks) {
      setTasksList(JSON.parse(cookieTasks))
    }
  }, [])

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = tasksList.filter((row) => {
      return row.id !== taskToDelete
    })
    Cookies.set('tasks', JSON.stringify(tasksWithoutDeletedOne))
    setTasksList(tasksWithoutDeletedOne)
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
    const updatedTasks = tasksList.map((row) =>
      row.id === taskId ? { ...row, status: completed } : row,
    )
    // console.log(updatedTasks);
    Cookies.set('tasks', JSON.stringify(updatedTasks))
    setTasksList(updatedTasks)
  }

  // calcular o total de tarefas
  const totalTasks = tasksList.length

  // calcular o total de tarefas concluídas
  const completedTasks = tasksList.filter((task) => task.status).length

  // variáveis auxiliares
  const isNewTaskEmpty = taskDescription.length === 0

  return (
    <React.Fragment>
      <Header />
      <main className={styles.formTask}>
        <form onSubmit={handleCreateNewTask} className={styles.sendTask}>
          <Input
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
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
            {(tasksList.length > 0 &&
              tasksList.map((line) => {
                return (
                  <Task
                    key={line.id}
                    rows={line}
                    // on => quando
                    onDeleteTask={deleteTask}
                    onCompletedTask={completedTask}
                  ></Task>
                )
              })) || <NotTask />}
          </div>
        </article>
      </main>
    </React.Fragment>
  )
}
