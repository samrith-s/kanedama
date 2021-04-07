import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

export interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

export function Layout({ children, title }: LayoutProps) {
    return (
        <section className='container mx-auto py-4'>
            <Head>
                <title>{title} - Mansa</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <NextNProgress
                color='#6347d1'
                height={10}
                options={{ easing: 'ease', speed: 500, showSpinner: false }}
            />
            {children}
        </section>
    );
}
