import React, { useState, useEffect } from 'react';
import { Card, Grid, Button, Input, Spinner } from '@geist-ui/core';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
const PersonalInformation = ({ id }: { id: string }) => {
    const [instructorInformation, setInstructorInformation] =
        useState<InstructorInformation>();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newValues, setNewValues] = useState({});
    useEffect(() => {
        getInstructorInformation();
    }, []);
    const getInstructorInformation = async () => {
        const response = await fetch(`/api/instructor/getInformation/${id}`);
        const data = await response.json();
        setInstructorInformation(data[0]);
    };

    const updateInstructorInformation = async () => {
        setNewValues(prev => ({
            ...prev,
            id: instructorInformation?.id,
        }));
        const response = await fetch(`/api/instructor/updateInformation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newValues),
        });
        const data = await response.json();
        if (data.success) {
            setInstructorInformation({
                ...instructorInformation,
                ...newValues,
            } as InstructorInformation);
            setEditMode(false);
        }
        getInstructorInformation();
        setEditMode(false);
    };

    if (!instructorInformation) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }
    return (
        <Card w="52%" mx="auto" mt={1} shadow hoverable type="default">
            <Card.Content>
                {instructorInformation && (
                    <Grid.Container gap={2}>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Instructor ID:</b>{' '}
                                {instructorInformation?.id}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>First Name:</b>{' '}
                                {instructorInformation?.first_name}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Last Name:</b>{' '}
                                {instructorInformation?.last_name}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Birth Date:</b>{' '}
                                {new Date(
                                    instructorInformation?.birth_date
                                ).toLocaleDateString()}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Gender:</b>{' '}
                                {instructorInformation?.gender === 'm'
                                    ? 'Male'
                                    : 'Female'}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            {editMode ? (
                                <p>
                                    <b>Email:</b>{' '}
                                    <Input
                                        htmlType="email"
                                        type="success"
                                        onChange={e =>
                                            setNewValues({
                                                ...newValues,
                                                email: e.target.value,
                                            })
                                        }
                                        width="80%"
                                        initialValue={
                                            instructorInformation?.email
                                        }
                                    />
                                </p>
                            ) : (
                                <p>
                                    <b>Email:</b> {instructorInformation?.email}
                                </p>
                            )}
                        </Grid>
                        <Grid xs={24} md={12}>
                            {editMode ? (
                                <p>
                                    <b>Phone:</b>{' '}
                                    <Input
                                        htmlType="tel"
                                        type="success"
                                        width="70%"
                                        onChange={e =>
                                            setNewValues({
                                                ...newValues,
                                                phone: e.target.value,
                                            })
                                        }
                                        initialValue={
                                            instructorInformation?.phone
                                        }
                                    />
                                </p>
                            ) : (
                                <p>
                                    <b>Phone:</b> {instructorInformation?.phone}
                                </p>
                            )}
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Department:</b>{' '}
                                {instructorInformation?.department_name}
                            </p>
                        </Grid>
                    </Grid.Container>
                )}
            </Card.Content>
            <Card.Footer className="centerButton">
                {editMode ? (
                    <Grid.Container justify="center" gap={2}>
                        <Grid xs={12} md={8}>
                            <Button
                                onClick={() => updateInstructorInformation()}
                                type="success"
                                icon={<AiOutlineCheck />}
                            >
                                Save
                            </Button>
                        </Grid>
                        <Grid xs={12} md={8}>
                            <Button
                                type="error"
                                icon={<AiOutlineClose />}
                                onClick={() => setEditMode(false)}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid.Container>
                ) : (
                    <Button type="secondary" onClick={() => setEditMode(true)}>
                        Edit
                    </Button>
                )}
            </Card.Footer>
        </Card>
    );
};

export default PersonalInformation;
