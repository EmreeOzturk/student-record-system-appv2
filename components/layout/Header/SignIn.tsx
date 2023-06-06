import { ButtonDropdown, Grid, Text, Button } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { RiAdminFill, RiLoginBoxFill, RiLoginBoxLine } from 'react-icons/ri';
import { BsSun, BsMoon } from 'react-icons/bs';
import React from 'react';
const SignIn = ({
    switchTheme,
    themeType,
}: {
    switchTheme: () => void;
    themeType: string;
}) => {
    const router = useRouter();
    return (
        <Grid justify="flex-end" alignItems="center">
            <ButtonDropdown type="secondary" icon={null}>
                <ButtonDropdown.Item main>Sign In</ButtonDropdown.Item>
                <ButtonDropdown.Item
                    className="flexCenter"
                    onClick={() => router.push('/login/student')}
                >
                    <RiLoginBoxFill />
                    <Text h5>Student Login</Text>
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                    className="flexCenter"
                    onClick={() => router.push('/login/instructor')}
                >
                    <RiLoginBoxLine />
                    <Text h5>Instructor Login</Text>
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                    className="flexCenter"
                    onClick={() => router.push('/login/admin')}
                >
                    <RiAdminFill />
                    <Text h5>Admin Login</Text>
                </ButtonDropdown.Item>
            </ButtonDropdown>
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

export default SignIn;
