import React, { useState } from "react";
import "./global.css";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

function App() {
  const [newTextTask, setNewTextTask] = useState([""]);

  return (
    // sintaxe mais limpa no HTML
    <React.Fragment>
      <Header />
      <div>
        <main>
          <div>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar</button>
          </div>
          <article>
            <div>
              <p>
                Tarefas criadas <strong>5</strong>
              </p>
              <p>
                Concluídas <strong>2 de 5</strong>
              </p>
            </div>
            <Task />
            {/* <textarea name="task" value={newTextTask}></textarea> */}
          </article>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
