import { rem } from 'polished';
import { styled } from 'twin.macro';

export interface GridProps {
    columns?: string;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-auto-rows: max-content;
    column-gap: ${rem(20)};
    row-gap: ${rem(20)};
    margin-bottom: ${rem(20)};
`;
