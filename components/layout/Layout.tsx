import React from 'react';
import Header from './Header/Header';
import { Page } from '@geist-ui/core';
const RootLayout = ({
    children,
    switchTheme,
    themeType,
}: {
    children: React.ReactNode;
    switchTheme: () => void;
    themeType: string;
}) => {
    return (
        <Page>
            <Page.Header>
                <Header switchTheme={switchTheme} themeType={themeType}/>
            </Page.Header>
            <Page.Content>{children}</Page.Content>
        </Page>
    );
};

export default RootLayout;
