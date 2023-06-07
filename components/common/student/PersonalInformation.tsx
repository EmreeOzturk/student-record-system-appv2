import React, { useState, useEffect } from 'react';
import { Card, Grid, Button, Input, Spinner } from '@geist-ui/core';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
const PersonalInformation = ({ id }: { id: string }) => {
    const [studentInformation, setStudentInformation] =
        useState<StudentInformation>();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newValues, setNewValues] = useState({});
    useEffect(() => {
        getStudentInformation();
    }, []);
    const getStudentInformation = async () => {
        const response = await fetch(`/api/student/getInformation/${id}`);
        const data = await response.json();
        setStudentInformation(data[0]);
    };

    const updateStudentInformation = async () => {
        setNewValues({
            ...newValues,
            id: studentInformation?.id,
        });
        const response = await fetch(`/api/student/updateInformation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newValues),
        });
        const data = await response.json();
        if (data.success) {
            setStudentInformation({
                ...studentInformation,
                ...newValues,
            } as StudentInformation);
            setEditMode(false);
        }

        getStudentInformation();
        setEditMode(false);
    };

    if (!studentInformation) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }

    return (
        <Card w="52%" mx="auto" mt={1} shadow hoverable type="default">
            <Card.Content>
                {studentInformation && (
                    <Grid.Container gap={2}>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Student ID:</b> {studentInformation?.id}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>First Name:</b>{' '}
                                {studentInformation?.first_name}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Last Name:</b>{' '}
                                {studentInformation?.last_name}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Gender:</b>{' '}
                                {studentInformation?.gender === 'm'
                                    ? 'Male '
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
                                        defaultValue={studentInformation?.email}
                                        onChange={e =>
                                            setNewValues({
                                                ...newValues,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            ) : (
                                <p>
                                    <b>Email:</b> {studentInformation?.email}
                                </p>
                            )}
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Birth Date:</b>{' '}
                                {new Date(
                                    studentInformation?.birth_date
                                ).toLocaleDateString()}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            {editMode ? (
                                <p>
                                    <b>Address:</b>{' '}
                                    <Input
                                        htmlType="text"
                                        type="success"
                                        defaultValue={
                                            studentInformation?.address
                                        }
                                        onChange={e =>
                                            setNewValues({
                                                ...newValues,
                                                address: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            ) : (
                                <p>
                                    <b>Address:</b>{' '}
                                    {studentInformation?.address}
                                </p>
                            )}
                        </Grid>
                        <Grid xs={24} md={12}>
                            {editMode ? (
                                <p>
                                    <b>Phone:</b>{' '}
                                    <Input
                                        htmlType="text"
                                        type="success"
                                        defaultValue={studentInformation?.phone}
                                        onChange={e =>
                                            setNewValues({
                                                ...newValues,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                </p>
                            ) : (
                                <p>
                                    <b>Phone:</b> {studentInformation?.phone}
                                </p>
                            )}
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Enrollment Date:</b>{' '}
                                {new Date(
                                    studentInformation?.enrollment_date
                                ).toLocaleDateString()}
                            </p>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <p>
                                <b>Department Name:</b>{' '}
                                {studentInformation?.department_name}
                            </p>
                        </Grid>
                    </Grid.Container>
                )}
            </Card.Content>
            <Card.Footer className="centerButton">
                {editMode ? (
                    <Grid.Container justify="center" gap={2}>
                        <Grid xs={12} md={6}>
                            <Button
                                onClick={() => updateStudentInformation()}
                                type="success"
                                icon={<AiOutlineCheck />}
                            >
                                Save
                            </Button>
                        </Grid>
                        <Grid xs={12} md={6}>
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
