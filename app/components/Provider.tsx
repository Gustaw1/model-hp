'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = (props: { children: React.ReactNode }) => {
    return <SessionProvider>{props.children}</SessionProvider>
};

export default Provider