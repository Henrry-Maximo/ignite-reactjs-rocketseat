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

  
};