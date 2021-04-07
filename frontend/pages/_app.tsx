import 'tailwindcss/tailwind.css';

import { Container } from '~components/Container';
import { GlobalStyles } from '~components/GlobalStyles';
import { Header } from '~components/Header';

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
