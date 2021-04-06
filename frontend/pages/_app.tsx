import { createGlobalStyle } from 'styled-components';
import 'tailwindcss/tailwind.css';

import { Container } from '~components/Container';
import { Header } from '~components/Header';

const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Header />
                <Component {...pageProps} />
            </Container>
        </>
    );
}
