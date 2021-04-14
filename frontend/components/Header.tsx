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
        <header className='container mx-auto flex items-center justify-between p-4 sticky top-0 bg-white border-b border-gray-200'>
            <Link href='/'>
                <a className='text-primary text-2xl font-bold' data-testid='logo'>
                    Mansa
                    <span className='text-red-600'>.</span>
                </a>
            </Link>
            <nav>
                <NavLink selected={router.pathname.includes('/accounts')}>
                    <Link href='/accounts'>
                        <a data-testid='nav-accounts'>Accounts</a>
                    </Link>
                </NavLink>
            </nav>
        </header>
    );
}
