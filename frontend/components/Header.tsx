import Link from 'next/link';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

const NavLink = styled.div<{ selected?: boolean }>`
    ${tw`
        inline-block
        py-1
        px-2
        rounded
        border
        hover:ring-2
        hover:ring-primary
        hover:ring-opacity-25
        active:ring-4
        active:ring-primary
        active:ring-opacity-25
        cursor-pointer
    `}

    ${({ selected }) =>
        selected
            ? tw`
        bg-primary
        text-white
        border-transparent
    `
            : tw`
        bg-transparent
        text-primary
        border-primary
    `}
`;

export function Header() {
    const router = useRouter();

    return (
        <header className='container mx-auto flex items-center justify-between py-4'>
            <Link href='/'>
                <a className='text-primary text-2xl font-bold'>
                    Mansa
                    <span className='text-red-600'>.</span>
                </a>
            </Link>
            <nav>
                <NavLink selected={router.pathname.includes('/accounts')}>
                    <Link href='/accounts'>
                        <a>Accounts</a>
                    </Link>
                </NavLink>
            </nav>
        </header>
    );
}
