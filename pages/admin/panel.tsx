import React from 'react';
import { Button, Grid, Text } from '@geist-ui/core';
import Link from 'next/link';
const AdminPanel = () => {
    return (
        <Grid
            justify="center"
            alignItems="center"
            style={{
                height: '70vh',
                display: 'flex',
                gap: '2rem',
            }}
        >
            <Button h={4} type="success">
                <Link href="/admin/add-teacher">
                    <Text color="white" h4>
                        Add Teacher
                    </Text>
                </Link>
            </Button>
            <Button h={4} type="warning">
                <Link href="/admin/view-students">
                    <Text color="white" h4>
                        View Students
                    </Text>
                </Link>
            </Button>
        </Grid>
    );
};

export default AdminPanel;
