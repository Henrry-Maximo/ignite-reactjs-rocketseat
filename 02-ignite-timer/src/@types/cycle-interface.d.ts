import { ReactNode } from "react";

export interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  // isActive: boolean -> percorrer o ciclo e colocar como false
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassad: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds:number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}