import React from 'react';
import SigninButton from '../SigninButton';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='flex h-24 flex-col justify-center bg-stone-100'>
            <nav className='container'>
                <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
                    <li className='text-sm'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-sm'>
                        <Link href='/dashboard'>Dashboard (client)</Link>
                    </li>
                    <li>
                        <SigninButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;