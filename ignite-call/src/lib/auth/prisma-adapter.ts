import { Adapter } from "next-auth/adapters"
import { prisma } from "../prisma"

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {
      return
    },

    async getUser(id) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id
        }
      });

      return { 
        id: user.id, 
        name: user.name, 
        username: user.username,
        email: user.email!, 
        emailVerified: null,
        avatar_url: user.avatar_url!
      };
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email
        }
      });
      
      return { 
        id: user.id, 
        name: user.name, 
        username: user.username,
        email: user.email!, 
        emailVerified: null,
        avatar_url: user.avatar_url!
      };
    },

    async getUserByAccount({ providerAccountId, provider }) {
      return
    },

    async updateUser(user) {
      return
    },

    async deleteUser(userId) {
      return
    },

    async linkAccount(account) {
      return
    },

    async unlinkAccount({ providerAccountId, provider }) {
      return
    },

    async createSession({ sessionToken, userId, expires }) {
      return
    },

    async getSessionAndUser(sessionToken) {
      return
    },

    async updateSession({ sessionToken }) {
      return
    },

    async deleteSession(sessionToken) {
      return
    },

    async createVerificationToken({ identifier, expires, token }) {
      return
    },

    async useVerificationToken({ identifier, token }) {
      return
    },
  }
}