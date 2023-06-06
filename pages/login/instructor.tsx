import { Grid, Input, Text, Button } from '@geist-ui/core';
import React from 'react';
import Image from 'next/image';
const InstructorLogin = () => {
    return (
        <Grid.Container>
            <Grid justify="center" xs={24} md={12}>
                <Image
                    src="/instructor.avif"
                    alt="student"
                    width={650}
                    height={500}
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
                <Text h2>Instructor Login</Text>
                <form className="formBody">
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

export default InstructorLogin;
