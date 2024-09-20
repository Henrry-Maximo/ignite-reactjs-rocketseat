import { ActionTypes, CyclesState } from "../@types/cycle-interface";

export function cycleReducer(state: CyclesState, action: any) {
    // console.log(state);
    // console.log(action);

    switch (action.type) {
      case ActionTypes.ADD_NEW_CYCLE:
        // return [...state, action.payload.newCycle]
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        };
      case ActionTypes.INTERRUPT_CURRENT_CYCLE:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() };
            }

            return cycle;
          }),
          activeCycleId: null,
        };
      case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            }

            return cycle;
          }),
          activeCycleId: null,
        };
      default:
        return state
    }
  }