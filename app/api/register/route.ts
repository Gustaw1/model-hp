import db from "@/app/lib/db";
import User from "@/app/models/User";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

interface RequestBody {
    username: string;
    email: string;
    password: string;
};

export async function POST(req: Request) {

    db.connect().catch(err => console.log('dbConnectError:', err));

    let body: RequestBody;

    try {
        body = await req.json();
    } catch (error) {
        return NextResponse.json({ error: "Data is missing" });
    }

    const { email, username, password } = body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        return NextResponse.json({ error: "User already exists" });
    }
    else {
        if (password.length < 6) {
            return NextResponse.json({ error: "Password should be 6 characters long" });
        }
    }
    const hashedPass = await hash(password, 12);

    const user = User.create({
        username,
        email: email,
        password: hashedPass
    });


    return NextResponse.json(user);
}
