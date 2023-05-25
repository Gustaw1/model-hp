'use client';
import React, { useState } from 'react';
import SigninButton from '../SigninButton';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter } from 'react-icons/ai';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <header className='flex w-full h-24 bg-white shadow-xl'>
            <nav className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>

                <Link href='/'>Logo</Link>
                {/* // TODO */}
                {/* <Image
                src={Logo}
                alt='Logo'
                width='205'
                height=75
                className='cursor-pointer'
                /> */}
                <div className='hidden sm:flex'>
                    <ul className='table'>
                        <li className='px-10 uppercase table-cell align-middle text-l'>
                            <Link className='hover:border-b-2' href='/'>Home</Link>
                        </li>
                        <li className='px-10 uppercase table-cell align-middle text-l'>
                            <Link className='hover:border-b-2' href='/dashboard'>Dashboard (client)</Link>
                        </li>
                        <li className='ml-10 uppercase text-xl'>
                            <SigninButton />
                        </li>
                    </ul>
                </div>
                <div className='sm:hidden cursor-pointer pl-24'>
                    <ul className='table'>
                        <li className='px-5 uppercase table-cell align-middle '>
                            <AiOutlineMenu onClick={handleMenu} size={25} />
                        </li>
                        <li className='px-5 table-cell align-middle '>
                            <SigninButton />
                        </li>
                    </ul>
                </div>
                <div className={menuOpen ?
                    'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleMenu} className='cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <MobileMenu handleMenu={handleMenu} />
                </div>
            </nav>
        </header >
    );
}

const MobileMenu = (props: { handleMenu: () => void }) => {
    return (
        <>
            <div className='flex-col py-4'>
                <ul>
                    <li className='py-4 cursor-pointer'>
                        <Link onClick={props.handleMenu} href='/'>Home</Link>
                    </li>
                    <li className='py-4 cursor-pointer'>
                        <Link onClick={props.handleMenu} href='/dashboard'>Dashboard (client)</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-row justify-around pt-10 items-center'>
                <AiOutlineInstagram size={30} className='cursor-pointer' />
                <AiOutlineFacebook size={30} className='cursor-pointer' />
                <AiOutlineTwitter size={30} className='cursor-pointer' />
            </div>
        </>
    );
}

export default Navbar;