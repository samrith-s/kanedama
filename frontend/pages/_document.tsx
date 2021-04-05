import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
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
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
