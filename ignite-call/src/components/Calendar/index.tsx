import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { getWeekDays } from "../../utils/get-week-days";
import { useState } from "react";
import dayjs from "dayjs";

export function Calendar() {
  // const [ ] = useState(new Date()) // API de Datas (javascript)
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs()
      .set('date', 1);
  }); // o returno desejado será o valor de inicialização do use state

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month'); // mês atual subtraido por um, ou seja, sempre o mês anterior em relação ao atual

    setCurrentDate(previousMonthDate);
  };

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, 'month'); // mês atual adicionando mais um, ou seja, sempre retorna o próximo mês em relação ao atual

    setCurrentDate(previousMonthDate);
  }; 
  
  const shortWeekDays = getWeekDays({ short: true });

  /*
  * currentMonth = variável pra realizar um cálculo, sem colocar diretamente no return
  * MMMM: formata em mês por extenso
  */
  const currentMonth = currentDate.format('MMMM');
  const currentYear = currentDate.format('YYYY');

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous Month">
            <CaretLeft />
          </button>

          <button onClick={handlePreviousMonth} title="Next Month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>
                2
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                3
              </CalendarDay>
            </td>
          </tr>
          <tr>
            <td><CalendarDay>
              1
            </CalendarDay></td>
            <td><CalendarDay>
              1
            </CalendarDay></td>
            <td><CalendarDay>
              1
            </CalendarDay></td>
            <td><CalendarDay>
              1
            </CalendarDay></td>
            <td>
              <CalendarDay>
                1
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                2
              </CalendarDay>
            </td>
            <td>
              <CalendarDay>
                3
              </CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}