"use client"
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const { data: session } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push(`/${session.user.name}`);
        }
    }, [session, router]);

    return (
        <div className='text-white flex justify-between items-center p-16 h-24'>
            <Link href={'/'}>
                <div className='relative text-3xl font-bold '>Patronix</div>
            </Link>

            {session ? (
                <button
                    type="button"
                    className="relative text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => signOut()}
                >
                    Logout
                </button>
            ) : (
                <Link href={'/login'}>
                    <button
                        type="button"
                        className="relative text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
}
