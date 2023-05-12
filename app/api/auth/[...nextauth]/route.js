import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@lib/db";
import User from "@models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        console.log(profile);
        const userExists = await User.findOne({ email: profile.email });
        if (userExists) {
          return true;
        }

        await User.create({
          name: profile.name,
          email: profile.email,
          imgUrl: profile.picture,
        });

        return true;
      } catch (error) {
        console.log("Error signing in", error);
        return false;
      }
    },
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
