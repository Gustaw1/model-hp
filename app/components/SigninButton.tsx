'use client';
import { signIn, signOut, useSession } from "next-auth/react"

const SigninButton = () => {

    const { data: session } = useSession();

    // ================ Simple Sign in / Sign Out ================ //

    if (session && session.user) {
        return (
            <>
                <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })} >Sign Out</button>
            </>
        );
    }
    return <button onClick={() => signIn()} >Sign In</button>
    // ================ Simple Sign in / Sign Out ================ //
}

export default SigninButton;