import { ButtonDropdown, Grid, Text, Button } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { RiAdminFill, RiLoginBoxFill, RiLoginBoxLine } from 'react-icons/ri';
import { BsSun, BsMoon } from 'react-icons/bs';
import React from 'react';
const SignOut = ({
    switchTheme,
    themeType,
}: {
    switchTheme: () => void;
    themeType: string;
}) => {
    const router = useRouter();
    return (
        <Grid justify="flex-end" alignItems="center">
            <Button type="secondary" onClick={() => router.push('/')}>
                <Text>Sign Out</Text>
            </Button>
            <Button
                style={{
                    marginLeft: '1rem',
                }}
                onClick={switchTheme}
                auto
            >
                {themeType === 'dark' ? <BsSun /> : <BsMoon />}
            </Button>
        </Grid>
    );
};

export default SignOut;
