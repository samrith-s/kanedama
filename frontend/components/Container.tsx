import { rem } from 'polished';
import tw, { styled } from 'twin.macro';

export const Container = styled.main`
    grid-template-rows: ${rem(75)} auto;
    ${tw`
        grid
        grid-cols-1
        mx-auto 
        min-h-full
    `}
`;
