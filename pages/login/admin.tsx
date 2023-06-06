import React from 'react';
import { Grid, Input, Text, Button } from '@geist-ui/core';
import Image from 'next/image';
const AdminLogin = () => {
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
                <form className="form_container">
                    <Input
                        width="300px"
                        placeholder="ID"
                        type="secondary"
                        required
                        mb={2}
                    />
                    <Input
                        width="300px"
                        placeholder="Password"
                        type="secondary"
                        required
                        mb={2}
                    />
                    <Button w="150px" type="success">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid.Container>
    );
};

export default AdminLogin;
