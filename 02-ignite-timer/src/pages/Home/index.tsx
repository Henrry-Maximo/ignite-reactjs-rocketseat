import { HandPalm, Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  StopCountDownButton,
  TaskInput,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

/* 
Controlled vs Uncontrolled

Controlled -> manter em tempo real a informação no estado
Uncontrolled -> buscar somente quando necessário (funçao chamada somente quando enviado)

function register(name: string) {
  return {
    onChange: () => void,
    onBlur: () => void,
    onFocus: () => void,
  }
}

*/

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa."),
  minutesAmount: zod
    .number()
    .min(1, "o ciclo precisa ser de no mínimo 60 minutos.")
    .max(60, "O intervalo precisa ser de no máximo 660 minutos."),
});

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  // isActive: boolean -> percorrer o ciclo e colocar como false
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassad, setAmountSecondsPassad] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: "", minutesAmount: 0 },
  });

  // const [task, setTask] = useState('');
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)
        
        if (secondsDifference >= totalSeconds) {
          setCycles(state => state.map(cycle => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            }
      
            return cycle;
          }))

          setAmountSecondsPassad(
            totalSeconds
          );
          clearInterval(interval)
        } else {
          setAmountSecondsPassad(
            secondsDifference
          );
        }
        
        
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    // closure
    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassad(0);
    // setCycles([...cycles, newCycle ])
    reset();
  }

  function handleInterruptCycle() {
    setCycles(state => state.map(cycle => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() }
      }

      return cycle;
    }))
    setActiveCycleId(null)
  }

  
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassad : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  // floor => arredondar pra baixo
  // ceil => arredondar pra cima
  // round => arredondar acima/abaixo de 0.5

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro ${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  // console.log(formState.errors)

  // valor do campo de task
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            style={{ textOverflow: "ellipsis" }}
            disabled={!!activeCycle}
            // onChange={(e) => setTask(e.target.value)}
            // value={task}
            // spread-operator
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={1}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
