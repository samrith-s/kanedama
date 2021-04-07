import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link
                        rel='preload'
                        as='style'
                        href='https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap'
                    />
                    <noscript>
                        <link
                            rel='stylesheet'
                            href='https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap'
                        />
                    </noscript>
                </Head>
                <body className='font-sans'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
