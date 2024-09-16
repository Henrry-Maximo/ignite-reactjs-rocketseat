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
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassad: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds:number) => void;
}