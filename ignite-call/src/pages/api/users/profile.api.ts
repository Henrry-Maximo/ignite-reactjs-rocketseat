import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import z from "zod";
import { prisma } from "../../../lib/prisma";

// interface
// zod

const updateProfileBodySchema = z.object({
  bio: z.string(),
});

// cadastrar os intervalos de tempo do usuário
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

  if (!session) {
    return res.status(401).end();
  }

  const { bio } = updateProfileBodySchema.parse(req.body);

  await prisma.user.update({
    where: {
      id: session.user.id,
    },

    data: {
      bio
    }
  })
  
  // status 204: sucesso mas sem conteúdo
  return res.status(204).end();
}