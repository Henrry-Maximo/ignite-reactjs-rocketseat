import { createContext, useEffect, useReducer, useState } from "react";
import {
  type Cycle,
  type CreateCycleData,
  type CyclesContextProviderProps,
  type CyclesContextType,
} from "../@types/cycle-interface";
import { cycleReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // const [cycles, setCycles] = useState<Cycle[]>([]);

  const [cyclesState, dispatch] = useReducer(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      // return {
      //   cycles: [],
      //   activeCycleId: null,
      // };
      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassad, setAmountSecondsPassad] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassad(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
    // dispatch({
    //   type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    //   payload: {
    //     activeCycleId,
    //   },
    // });

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

    dispatch(addNewCycleAction(newCycle));
    // dispatch({
    //   type: ActionTypes.ADD_NEW_CYCLE,
    //   payload: {
    //     newCycle,
    //   },
    // });

    // closure
    // setCycles((state) => [...state, newCycle]);
    // setActiveCycleId(id);
    setAmountSecondsPassad(0);
    // setCycles([...cycles, newCycle ])
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
    // dispatch({
    //   type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    //   payload: {
    //     activeCycleId,
    //   },
    // });

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() };
    //     }

    //     return cycle;
    //   })
    // );
    // setActiveCycleId(null);
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
    >
      {children}
    </CyclesContext.Provider>
  );
}
