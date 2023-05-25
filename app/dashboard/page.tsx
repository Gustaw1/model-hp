'use client';

import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

const Dashboard = () => {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/dashboard');
        }
    });

    return (<>
        <section>
            <div className='container'>
                <h2 className='mt-4 font-medium'>You are logged in as:</h2>
                <p className='mt-4'>{session?.user?.email}</p>
            </div>
        </section>
    </>);
};

export default Dashboard;

