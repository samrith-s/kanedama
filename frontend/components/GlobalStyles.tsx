import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomGlobalStyles = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomGlobalStyles />
    </>
);
