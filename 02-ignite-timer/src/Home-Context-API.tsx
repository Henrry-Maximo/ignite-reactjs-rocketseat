import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any);

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2);
        }}
      >
        Alterar ciclo ativo!
      </button>
    </h1>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);

  return <h1>Countdown: {activeCycle}</h1>;
}

export function Home() {
  // acessível pelo context através do pai (pai/filhos)
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
}

/* 
  ## props versus context
  
  """
  NewCycleForm({activeCycle})
  const activeCycle = 1;
  <NewCycleForm activeCycle={activeCycle} />
  """

  """
  const CycleContext = createContext({
    activeCycle: 1
  })
  let { activeCycle } = useContext(CycleContext);
  """

  */
