import React, { useState, useEffect } from 'react';
import { Table, Grid, Spinner } from '@geist-ui/core';
const ViewStudents = () => {
    const [students, setStudents] = useState<AllStudentsWithHours[]>();
    useEffect(() => {
        fetch('/api/admin/getAllStudentsWithHours')
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            });
    }, []);

    if (!students) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }
    return (
        <div>
            <Table data={students}>
                <Table.Column prop="id" label="ID" />
                <Table.Column prop="first_name" label="Name" />
                <Table.Column prop="last_name" label="Last Name" />
                <Table.Column prop="total_hours" label="Total Hours" />
            </Table>
        </div>
    );
};

export default ViewStudents;
