import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    // return method not allowed
    return res.status(405).end();
  }

  const { name, username } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      username
    }
  });

  // return status created user
  res.status(201).json(user);
}
