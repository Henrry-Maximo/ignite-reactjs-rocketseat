import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import dayjs from "dayjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  };

  // ex.: http://localhost:3333/api/users/henrry-maximo/availability?date=2026-04-21
  // não existe param no nextjs
  const username = String(req.query.username);
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ message: "Date not provided." });
  };

  const user = await prisma.user.findUnique({
    where: {
      username
    },
  });

  if (!user) {
    return res.status(400).json({ message: "User does not exist." });
  };

  const referenceDate = dayjs(String(date));

  const isPastDate = referenceDate.endOf('day').isBefore(new Date());
  if (isPastDate) {
    return res.json({ availability: [] });
  };

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: referenceDate.get('day'),
    }
  });

  if (!userAvailability) {
    return res.json({ availability: [] });
  };

  const { time_start_in_minutes, time_end_in_minutes } = userAvailability;

  // converter para horas (hora p/ hora)
  const startHour = time_start_in_minutes / 60; // retorno 10
  const endHour = time_end_in_minutes / 60; // retorno 18
  // objetivo: [10, 11, 12, 13, 14, 15, 16, 17...] (array - todas as horas disponíveis)

  const possibleTimes = Array.from({ length: endHour - startHour }).map((_, i) => {
    return startHour + i;
  });

  // gte - greater than or equal
  const blockedTimes = await prisma.scheduling.findMany({
    select: {
      date: true // trazer somente data
    },
    where: {
      // retornar somente agendamentos que forem do usuário logado e que a data esteja entre o start e o end hour
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      },
    },
  });

  // possibleTimes = [8, 9, 10]

  const availableTimes = possibleTimes.filter((time) => {
    return !blockedTimes.some((blockedTimes) => blockedTimes.date.getHours() === time)
  })

  return res.json({ possibleTimes, availableTimes });

};