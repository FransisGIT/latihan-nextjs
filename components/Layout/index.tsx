import React from 'react';
import Header from '../Landing/Header';
import Footer from "../Landing/Footer";
import styles from '@/styles/Layout.module.css';
import Head from 'next/head';


interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}
export default function index(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>Latihan NextJS | {pageTitle} </title>
                <meta name="description" content="Nextjs, Fransis nextjs" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.container}>{children}</div>
            </div>
            <Footer />
        </>
    )
}
