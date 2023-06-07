import React, { useState, useEffect } from 'react';
import { Table, Grid, Spinner } from '@geist-ui/core';

const Events = () => {
    const [events, setEvents] = useState<Event[]>();
    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch(`
                /api/student/getEvents
                `);
            const data = await response.json();
            setEvents(data);
        };
        getEvents();
    }, []);

    if (!events) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }

    return (
        <div>
            <Table data={events}>
                <Table.Column prop="title" label="Title" />
                <Table.Column prop="description" label="Description" />
                <Table.Column prop="event_date" label="Date" />
                <Table.Column prop="location" label="Location" />
            </Table>
        </div>
    );
};

export default Events;
