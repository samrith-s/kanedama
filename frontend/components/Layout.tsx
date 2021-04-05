import Head from 'next/head';
import React from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

export function Layout({ children, title }: LayoutProps) {
    return (
        <section>
            <Head>
                <title>{title} - Mansa</title>
            </Head>
            {children}
        </section>
    );
}
