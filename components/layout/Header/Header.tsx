import React from 'react';
import Logo from './Logo';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { Grid } from '@geist-ui/core';
import { useRouter } from 'next/router';

const Header = ({
    switchTheme,
    themeType,
}: {
    switchTheme: () => void;
    themeType: string;
}) => {
    const router = useRouter();
    return (
        <Grid.Container
            height="100px"
            justify="space-between"
            alignItems="center"
        >
            <Logo />
            {
                // If the user is on the home page, don't show the sign in button
                router.pathname.startsWith('/student/') ||
                router.pathname.startsWith('/instructor/') ||
                router.pathname.startsWith('/admin/') ? (
                    <SignOut switchTheme={switchTheme} themeType={themeType} />
                ) : (
                    <SignIn switchTheme={switchTheme} themeType={themeType} />
                )
            }
        </Grid.Container>
    );
};

export default Header;
