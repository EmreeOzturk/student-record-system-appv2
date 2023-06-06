import '@/styles/globals.css';
import 'inter-ui/inter.css';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { useState } from 'react';
import RootLayout from '@/components/layout/Layout';
export default function App({ Component, pageProps }: AppProps) {
    const [themeType, setThemeType] = useState('light');
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'));
    };
    return (
        <GeistProvider themeType={themeType}>
            <CssBaseline />
            <RootLayout switchTheme={switchThemes} themeType={themeType}>
                <Component {...pageProps} switchTheme={switchThemes} />
            </RootLayout>
        </GeistProvider>
    );
}
