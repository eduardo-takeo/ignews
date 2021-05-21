import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna";
import q from "faunadb";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        fauna.query(
          q.Create(q.Collection("users"), {
            data: {
              email: user.email,
            },
          })
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});