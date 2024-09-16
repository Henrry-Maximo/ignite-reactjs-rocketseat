import { createContext, useState } from "react";
import * as zod from "zod";

import { HandPalm, Play } from "phosphor-react";
import {
	HomeContainer,
	StartCountDownButton,
	StopCountDownButton,
} from "./styles";

import { CountDown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";

const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, "Informe a tarefa."),
	minutesAmount: zod
		.number()
		.min(1, "o ciclo precisa ser de no mínimo 60 minutos.")
		.max(60, "O intervalo precisa ser de no máximo 660 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

import type { Cycle, CyclesContextType } from "../../@types/cycle-interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
	const [cycles, setCycles] = useState<Cycle[]>([]);
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
	const [amountSecondsPassad, setAmountSecondsPassad] = useState(0);

	const newCycleForm = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: { task: "", minutesAmount: 0 },
	});

	const { handleSubmit, watch, reset } = newCycleForm;
	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

	function setSecondsPassed(seconds: number) {
		setAmountSecondsPassad(seconds);
	}

	function markCurrentCycleAsFinished() {
		setCycles((state) =>
			state.map((cycle) => {
				if (cycle.id === activeCycleId) {
					return { ...cycle, finishedDate: new Date() };
				}

				return cycle;
			}),
		);
	}

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
		setCycles((state) =>
			state.map((cycle) => {
				if (cycle.id === activeCycleId) {
					return { ...cycle, interruptedDate: new Date() };
				}

				return cycle;
			}),
		);
		setActiveCycleId(null);
	}

	// value field task
	const task = watch("task");
	const isSubmitDisabled = !task;

	return (
		<HomeContainer>
			<form onSubmit={handleSubmit(handleCreateNewCycle)}>
				<CyclesContext.Provider
					value={{
						activeCycle,
						activeCycleId,
						markCurrentCycleAsFinished,
						amountSecondsPassad,
						setSecondsPassed,
					}}
				>
          <FormProvider {...newCycleForm}>
						<NewCycleForm />
					</FormProvider>
					<CountDown />
				</CyclesContext.Provider>

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
