import tw, { styled } from 'twin.macro';

export const Select = styled.select`
    ${tw`
        px-4
        py-2
        transition 
        border 
        border-gray-200 
        rounded 
        focus:border-primary 
        w-full
        cursor-pointer
    `}
`;
