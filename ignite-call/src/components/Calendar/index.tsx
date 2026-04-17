import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from "./styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import { getWeekDays } from "../../utils/get-week-days";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

interface CalendarWeek {
  week: number, // número da semana
  days: Array<{
    date: dayjs.Dayjs,
    disabled: boolean,
  }>
}

// Um array de objetos que armazenam a semana com seus respectivos dias
type CalendarWeeks = CalendarWeek[];

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

  // um array com cada uma das semanas do mês
  // [[ 1, 2, 3], [4, 5, 6, 7, 8, 9, 10]]
  const calendarWeeks = useMemo(() => {
    const daysInMonth = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1) // o dia
    });

    // o dia da semana do primeiro dia da semana do mês
    const firstWeekDay = currentDate.get('day'); // dia da semana

    const previousMonthFillArray = Array.from({
      length: firstWeekDay
    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    }).reverse();

    const lastDayInCurrentMonth = currentDate.set(
      'date', // seta o dia do mês para o último - 31
      currentDate.daysInMonth() // retorna quantidade de dias no mês - 2025/01/31
    )
    // capturar último dia do mês
    const lastWeekDay = lastDayInCurrentMonth.get('day') // retorna dia da semana desse último dia - 5 (sexta-feira)

    console.log("last week day", lastWeekDay);

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1) // lastWeekDay começa por 0
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return {
          date,
          disabled: true
        }
      }),
      ...daysInMonth.map((date) => {
        return {
          date,
          disabled: date.endOf('day').isBefore(new Date())
        }
      }),
      ...nextMonthFillArray.map((date) => {
        return {
          date,
          disabled: true
        }
      }),
    ];

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        // const weekHasNotEnded = !(i % 7) // índice não divisível por sete
        // const weekHasEnded = i % 7;
        const isNewWeek = i % 7 === 0;

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7)
          })
        }

        return weeks
      },
      []
    );

    return calendarWeeks;

    // return nextMonthFillArray;
    // return [...previousMonthFillArray, ...daysInMonth];
  }, [currentDate]);

  console.log(calendarWeeks);

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

          <button onClick={handleNextMonth} title="Next Month">
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
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay disabled={disabled}>{date.get('date')}</CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}