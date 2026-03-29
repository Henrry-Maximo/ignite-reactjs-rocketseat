import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';
import { setCookie } from 'nookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    // return method not allowed
    return res.status(405).end();
  }

  // working with cookies at nextjs (api)
  // req.cookies
  // res.setHeader('Set-Cookie', []);

  // req sempre pra acessar (ler)
  // res sempre pra modificar (atualizar)

  const { name, username } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      username
    }
  });
  
  if (userExists) {
    return res.status(400).json({
      message: "Username already taken."
    });
    // throw new Error("Endereço escolhido já cadastrado!");
  }

  const user = await prisma.user.create({
    data: {
      name,
      username
    }
  });

  // after that the user its create
  // all cookie is need of time expires
  setCookie({
    res
  }, '@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days (magic numbers)
    // expires: new Date()
    path: '/',
  });

  // return status created user
  res.status(201).json(user);
}
