import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import z from "zod";
import { prisma } from "../../../lib/prisma";

// interface
// zod

const timeIntervalsBodySchema = z.object({
  intervals: z.array(z.object({
    weekDay: z.number(),
    startTimeInMinutes: z.number(),
    endTimeInMinutes: z.number()
  }))
});

// cadastrar os intervalos de tempo do usuário
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

  if (!session) {
    return res.status(401).end();
  }

  const { intervals } = timeIntervalsBodySchema.parse(req.body);

  await Promise.all(intervals.map((interval) => {
    return prisma.userTimeInterval.create({
      data: {
        week_day: interval.weekDay,
        time_start_in_minutes: interval.startTimeInMinutes,
        time_end_in_minutes: interval.endTimeInMinutes,
        user_id: session.user?.id,
      }
    })
  }));
  // await prisma.userTimeInterval.createMany

  // CQRS - Command / Query
  return res.status(201).end();

  // return res.json({
  //   session
  // });
}