import db from "@/app/lib/db";
import User from "@/app/models/User";
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcryptjs';
import { IUser } from "../types";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await db.connect().catch(err => { throw new Error(err) });
                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password");

                if (!user) {
                    throw new Error("Invalid credentials");
                }
                // TODO
                const isPasswordCorrect = await compare(credentials?.password || 'NoPass', user.password);

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }
                return user;
            }
        })
    ],
    // default login next page
    // pages: {
    //     signIn: "/login"
    // },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token;
        },
        session: async ({ session, token }) => {
            const user = token.user as IUser;
            session.user = user;
            return session;
        }

    },
}