import db from "@/app/lib/db";
import User from "@/app/models/User";
import { IUser } from "@/app/types";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     // db.connect().catch(err => res.json({ err }));
//     db.connect().catch(err => console.log('dbConnectError:', err));
//     const body = await req.body;
//     console.log('req', req)
//     console.log('body', body)
//     if (req.method === "POST") {
//         if (!req.body) {
//             return res.status(400).json({ error: "Data is missing" });
//         }
//         console.log('req.body', req.body)
//         const { username, email, password } = req.body;
//         const userExist = await User.findOne({ email });

//         if (userExist) {
//             return res.status(409).json({ error: "User already exists" });
//         }
//         else {
//             if (password.length < 6) {
//                 return res.status(409).json({ error: "Password should be 6 characters long" })
//             }
//             const hashedPass = await hash(password, 12);

//             User.create({
//                 username,
//                 email: email,
//                 password: hashedPass
//             }, (error: unknown, data: IUser) => {
//                 if (error && error instanceof mongoose.Error.ValidationError) {
//                     for (let field in error.errors) {
//                         const msg = error.errors[field].message;
//                         return res.status(409).json({ error: msg });
//                     }
//                 }
//                 const user = {
//                     email: data.email,
//                     username: data.username,
//                     _id: data._id
//                 };

//                 return res.status(201).json({
//                     success: true,
//                     user
//                 })
//             })
//         }
//     }
//     else {
//         res.status(404).json({ error: "Method not Allowed" });
//     }
// };

// export { handler as POST };


export async function POST(req: Request) {
    // db.connect().catch(err => res.json({ err }));
    db.connect().catch(err => console.log('dbConnectError:', err));

    // TODO: walidacja body, email,username,password
    const body = await req.json();
    const { email, username, password } = body;

    const hashedPass = await hash(password, 12);

    const user = User.create({
        username,
        email: email,
        password: hashedPass
    });

    return NextResponse.json(user);
}
