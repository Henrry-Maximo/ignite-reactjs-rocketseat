import { createContext, useReducer, useState } from "react";
import type {
  CreateCycleData,
  Cycle,
  CyclesContextProviderProps,
  CyclesContextType,
} from "../@types/cycle-interface";

export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // const [cycles, setCycles] = useState<Cycle[]>([]);

  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    console.log(state);
    console.log(action)

    if (action.type === 'ADD_NEW_CYCLE') {
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassad, setAmountSecondsPassad] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassad(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId
      }
    })

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() };
    //     }

    //     return cycle;
    //   })
    // );
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle
      }
    })

    // closure
    // setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassad(0);
    // setCycles([...cycles, newCycle ])
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId
      }
    })

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() };
    //     }

    //     return cycle;
    //   })
    // );
    setActiveCycleId(null);
  }

  return (
    <CyclesContext.Provider
      value={{
				cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassad,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >{children}</CyclesContext.Provider>
  );
}
