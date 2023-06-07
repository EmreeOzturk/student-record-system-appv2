import React from 'react';
import { Grid, Input, Text, Button } from '@geist-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
const AdminLogin = () => {
    const router = useRouter();
    return (
        <Grid.Container>
            <Grid justify="center" xs={24} md={12}>
                <Image
                    src="/admin.avif"
                    alt="student"
                    width={550}
                    height={500}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Grid>
            <Grid
                justify="center"
                direction="column"
                alignItems="center"
                xs={24}
                py={5}
                md={12}
            >
                <Text h2>Admin Login</Text>
                <form className="formBody">
                    <Input
                        width="300px"
                        placeholder="ID"
                        type="secondary"
                        required
                        mb={2}
                    />
                    <Input.Password
                        width="300px"
                        placeholder="Password"
                        type="secondary"
                        required
                        mb={2}
                    />
                    <Button
                        onClick={() => router.push(`/admin/panel`)}
                        w="150px"
                        type="success"
                    >
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid.Container>
    );
};

export default AdminLogin;
