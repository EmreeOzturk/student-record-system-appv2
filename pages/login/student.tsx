import { Grid, Input, Text, Button } from '@geist-ui/core';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
const StudentLogin = () => {
    const router = useRouter();
    const [id, setId] = useState('');
    return (
        <Grid.Container>
            <Grid justify="center" xs={24} md={12}>
                <Image
                    src="/student.jpg"
                    alt="student"
                    width={650}
                    height={500}
                />
            </Grid>
            <Grid
                direction="column"
                justify="center"
                alignItems="center"
                py={5}
                xs={24}
                md={12}
            >
                <Text h2>Student Login</Text>
                <form className="form_container">
                    <Input
                        width="300px"
                        placeholder="ID"
                        type="secondary"
                        required
                        mb={2}
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <Input
                        width="300px"
                        placeholder="Password"
                        type="secondary"
                        required
                        mb={2}
                    />
                    <Button
                        typeof="htmlButton"
                        onClick={() => router.push(`/student/${id}`)}
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

export default StudentLogin;
