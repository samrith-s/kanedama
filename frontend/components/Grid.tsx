import { rem } from 'polished';
import tw, { styled } from 'twin.macro';

export interface GridProps {
    columns?: string;
}

export const Grid = styled.div<GridProps>`
    ${tw`grid auto-rows-max`};
    grid-template-columns: ${({ columns }) => columns};
    grid-auto-rows: max-content;
    column-gap: ${rem(20)};
    margin-bottom: ${rem(20)};
`;
