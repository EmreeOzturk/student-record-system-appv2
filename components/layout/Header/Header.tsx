import React from 'react';
import Logo from './Logo';
import SignIn from './SignIn';
import { Grid } from '@geist-ui/core';
const Header = ({
    switchTheme,
    themeType,
}: {
    switchTheme: () => void;
    themeType: string;
}) => {
    return (
        <Grid.Container
            height="100px"
            justify="space-between"
            alignItems="center"
        >
            <Logo />
            <SignIn switchTheme={switchTheme} themeType={themeType} />
        </Grid.Container>
    );
};

export default Header;
