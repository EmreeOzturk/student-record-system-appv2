import React, { useState, useEffect } from 'react';
import { Table, Button, Grid, Spinner } from '@geist-ui/core';
import { BsTrash } from 'react-icons/bs';
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
    const deleteEvent = async (id: number) => {
        const response = await fetch(
            `
                /api/instructor/deleteEvent/${id}
                `,
            {
                method: 'DELETE',
            }
        );
        const data = await response.json();
    };
    const renderAction = (value:any, rowData:any, index:any) => {
        const removeHandler = () => {
            deleteEvent(rowData.id);
            const newEvents = [...(events as Event[])];
            newEvents.splice(index, 1);
            setEvents(newEvents);
        };

        return (
            <Button
                type="error"
                auto
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={removeHandler}
            >
                <BsTrash size={17} />
            </Button>
        );
    };

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
                {/* delete */}
                <Table.Column
                    prop="operation"
                    label="Delete"
                    render={renderAction}
                />
            </Table>
        </div>
    );
};

export default Events;
