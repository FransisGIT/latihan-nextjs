import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Header.module.css';

export default function index() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link href="/" className='title'>Home </Link></li>
                <li className={styles.item}><Link href={"/blog"}>Blog</Link></li>
                <li className={styles.item}><Link href={"/user"}>Users</Link></li>
            </ul>
        </header>
    )
}
