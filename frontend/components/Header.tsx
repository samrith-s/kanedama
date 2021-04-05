import React from 'react';
import Link from 'next/link';

export function Header() {
    return (
        <header className='flex items-center p-4'>
            <Link href='/'>
                <a className='text-primary text-2xl font-bold inline-flex'>
                    Mansa
                    <span className='text-red-600'>.</span>
                </a>
            </Link>
        </header>
    );
}
