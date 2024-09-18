import { useContext } from "react";
import * as zod from "zod";

import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";

import { CountDown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa."),
  minutesAmount: zod
    .number()
    .min(1, "o ciclo precisa ser de no mínimo 60 minutos.")
    .max(60, "O intervalo precisa ser de no máximo 660 minutos."),
});
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { 
			task: "", 
			minutesAmount: 0 },
  });

	const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
		createNewCycle(data)
		reset()
	}

  // value field task
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
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

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}
*/
