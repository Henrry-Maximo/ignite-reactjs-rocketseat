import React, { useState } from "react";
import "./global.css";
import { Header } from "./components/Header/Header";

function App() {
  const [newTextTask, setNewTextTask] = useState([""]);

  return (
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
                Tarefas concluídas <strong>2 de 5</strong>
              </p>
            </div>
            {/* <textarea name="task" value={newTextTask}></textarea> */}
          </article>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
