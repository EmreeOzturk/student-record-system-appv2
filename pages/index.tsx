import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Grid, Text } from '@geist-ui/core';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Grid.Container className={inter.className}>
            <Head>
                <title>Next.js + Geist UI</title>
                <meta
                    name="description"
                    content="Next.js + Geist UI + TypeScript + ESLint + Prettier"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid.Container xs={24} md={12} justify="center">
                <Text h1 className={styles.headerGradientText}>
                    Empowering Students, Simplifying Teaching
                </Text>
                <Text h2 className={styles.h2GradientTextCyanToPurple}>
                    Welcome to the future of student management. Simplify your
                    academic journey with our intuitive and user-friendly
                    platform.
                </Text>
                <Text
                    h3
                    px={4}
                    py={1}
                    className={styles.borderGradientBlackToRed}
                >
                    Start Your Journey Today
                </Text>
            </Grid.Container>
            <Grid.Container
                xs={24}
                md={12}
                alignItems="center"
                justify="center"
            >
                <Image src="/home6.jpg" alt="home" width={500} height={500} />
            </Grid.Container>
        </Grid.Container>
    );
}
