import { useState } from "react";

// imutabilidade: gerar um novo array a partir do original com a adição desejada, o método tradicional utiliza o "push" para realizar, mas o conceito no React é alterado.

export function Counter() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;
  // let it change

  function increment() {
    // counter += 1;
    setCounter(counter + 1);

    console.log("Increment");
  };

  return (
    <div>
      {/* <h2>0</h2> */}
      <h2>{counter}</h2>

      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

// AngularJS = Two-Way Data Bind