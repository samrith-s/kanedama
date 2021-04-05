import tw from 'tailwind-styled-components';

export const Button = tw.button`
    inline-flex
    items-center
    justify-center
    bg-primary
    text-white
    p-2.5
    rounded
    outline-none
    transition

    active:outline-none
    focus:outline-none
    hover:outline-none

    active:ring-4
    active:ring-primary
    active:ring-opacity-25
    hover:ring
    hover:ring-primary
    hover:ring-opacity-25
`;
