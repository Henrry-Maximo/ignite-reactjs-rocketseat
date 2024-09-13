import { TaskInput, MinutesAmountInput, FormContainer } from "./styles";

export default function NewCycleForm() {
  return (
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
  );
}
