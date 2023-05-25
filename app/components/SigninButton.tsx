'use client';
import { Menu, Transition } from "@headlessui/react";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import Image from 'next/image'
import { Fragment } from "react";

const SigninButton = () => {

    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <Menu as='div' className='relative'>
                    <Menu.Button>
                        {session?.user?.image ? (
                            <div className='relative h-10 w-10'>
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name ?? 'Profile'}
                                    className='inline-block rounded-full'
                                    fill
                                />
                            </div>
                        ) : (
                            <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                <svg
                                    className='h-full w-full text-stone-400'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                </svg>
                            </span>
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className='bg-react dark:text-react absolute right-0 mt-1 flex w-96 origin-top-right flex-col rounded-xl pt-6 pb-2 text-white shadow-lg focus:outline-none dark:bg-white'>
                            <div className='mb-4 flex gap-4 px-6 text-sm'>
                                {session?.user?.image ? (
                                    <div className='relative h-10 w-10'>
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name ?? 'Profile'}
                                            className='inline-block rounded-full'
                                            fill
                                        />
                                    </div>
                                ) : (
                                    <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                        <svg
                                            className='h-full w-full text-stone-300'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                        </svg>
                                    </span>
                                )}
                                <div>
                                    <p className='font-medium text-gray-900'>
                                        {session.user?.name || 'Username'}
                                    </p>
                                    <p className='text-stone-400'>{session.user?.email}</p>
                                </div>
                            </div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href='/dashboard'
                                        className={`${active ? 'bg-gray-400 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <GearWheelIcon active={active} />Manage Account
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href='/dashboard'
                                        className={`${active ? 'bg-gray-400 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <EditIcon active={active} />
                                        Edit Pages
                                    </Link>
                                )}
                            </Menu.Item>
                            <div className='mx-2 my-1' style={{ backgroundColor: '#a8a29e', minHeight: '1px' }}></div>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-400 text-white' : 'text-gray-900'
                                            } rounded-md gap-6 py-2 text-sm `}

                                        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
                                    >
                                        <span>
                                            Sign Out
                                        </span>
                                    </button>
                                )}
                            </Menu.Item>

                        </Menu.Items>
                    </Transition>
                </Menu >
            ) : (
                <button
                    className='rounded-md border border-stone-300 px-3 py-1 text-sm dark:border-stone-600'
                    onClick={() => signIn()}
                >
                    Sign In
                </button>
            )}
        </>);
}

function EditIcon(props: { active: boolean }) {
    return (
        <svg
            className="mr-2 h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="none"
                stroke={props.active ? "white" : "#a8a29e"}
                strokeWidth="2"
            />
        </svg>
    )
}

function GearWheelIcon(props: { active: boolean }) {
    return (
        <svg
            className="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
        >
            <rect width="256" height="256" fill="none" />
            <circle
                cx="128"
                cy="128"
                r="48"
                fill="none"
                stroke={props.active ? "white" : "#a8a29e"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
            />
            <path
                d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z"
                fill="none"
                stroke={props.active ? "white" : "#a8a29e"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
            />
        </svg>
    )
}

export default SigninButton;