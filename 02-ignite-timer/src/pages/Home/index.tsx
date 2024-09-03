import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

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

export function Home() {
  const { register, handleSubmit, watch } = useForm({ resolver: zodResolver(), });
  // const [task, setTask] = useState('');

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  // valor do campo de task
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            // onChange={(e) => setTask(e.target.value)}
            // value={task}
            // spread-operator
            {...register('task')}
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
            step={5}
            min={5}
            max={60}
            {...register('minuteAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
