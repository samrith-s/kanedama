import { rem } from 'polished';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const StyledContainer = styled.main`
    grid-template-rows: ${rem(75)} auto;
`;

export const Container = tw(StyledContainer)`
    grid
    grid-cols-1
    mx-auto 
    min-h-full
    divide-y
`;
