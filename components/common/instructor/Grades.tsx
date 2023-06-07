import React, { useState, useEffect } from 'react';
import { Collapse, Grid, Button, Input, Spinner } from '@geist-ui/core';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Grades = ({ id }: { id: string }) => {
    const [courses, setCourses] = useState<InstructorCourses[]>();
    const [students, setStudents] = useState<CourseStudentsWithNotes[]>();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newNotes, setNewNotes] = useState<NewNotes>({} as NewNotes);
    const [whichItem, setWhichItem] = useState(0);
    useEffect(() => {
        const getCourses = async () => {
            const res = await fetch(
                `/api/instructor/getInstructorCourses/${id}`
            );
            const data = await res.json();
            setCourses(data);
        };

        const getCourseStudents = async () => {
            const res = await fetch(
                `/api/instructor/getCourseStudentsWithNotes/${id}`
            );
            const data = await res.json();
            setStudents(data);
        };

        getCourses();
        getCourseStudents();
    }, [id]);

    const updateNotes = async () => {
        const res = await fetch(`/api/instructor/updateNotes/${whichItem}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNotes),
        });
        const data = await res.json();
        setStudents((prev: any) => {
            return prev?.map((student: any) => {
                if (student?.grade_id === whichItem) {
                    return {
                        ...student,
                        ...newNotes,
                    };
                }
                return student;
            });
        });
        setNewNotes({} as NewNotes);
        setWhichItem(0);
    };

    if (!courses || !students) {
        return (
            <Grid.Container h={10} justify="center">
                <Spinner w={3} mt={10} />
            </Grid.Container>
        );
    }
    return (
        <Collapse.Group w="100%" margin="auto">
            {courses?.map(course => (
                <Collapse
                    shadow
                    key={course?.id}
                    title={
                        course?.name.slice(0, 1).toUpperCase() +
                        course?.name.slice(1)
                    }
                >
                    {students?.map(student => {
                        if (student?.course_id === course?.id) {
                            return (
                                <Grid.Container
                                    key={student?.student_id}
                                    className="tableHoverEffect"
                                    mb={1}
                                    mx={'auto'}
                                    w={'90%'}
                                    justify="center"
                                    alignItems="center"
                                    style={{
                                        paddingBottom: '1rem',
                                        paddingTop: '1rem',
                                        display: 'flex !important',
                                        justifyContent: 'center !important',
                                        alignItems: 'center !important',
                                    }}
                                >
                                    <Grid xs={24} sm={12} md={3}>
                                        <h5>
                                            Firstname: {student?.first_name}
                                        </h5>
                                    </Grid>
                                    <Grid xs={24} sm={12} md={4}>
                                        <h5>Lastname: {student?.last_name}</h5>
                                    </Grid>
                                    <Grid xs={24} sm={12} md={3}>
                                        {editMode &&
                                        whichItem === student?.grade_id ? (
                                            <Input
                                                placeholder="Midterm Grade"
                                                type="success"
                                                mr={1}
                                                value={newNotes?.midterm_grade}
                                                onChange={e =>
                                                    setNewNotes({
                                                        ...newNotes,
                                                        midterm_grade:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <h5>
                                                Midterm:{' '}
                                                {student?.midterm_grade}
                                            </h5>
                                        )}
                                    </Grid>
                                    <Grid xs={24} sm={12} md={3}>
                                        {editMode &&
                                        whichItem === student?.grade_id ? (
                                            <Input
                                                placeholder="Final Grade"
                                                type="success"
                                                mr={1}
                                                value={newNotes?.final_grade}
                                                onChange={e =>
                                                    setNewNotes({
                                                        ...newNotes,
                                                        final_grade:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <h5>
                                                Final: {student?.final_grade}
                                            </h5>
                                        )}
                                    </Grid>
                                    <Grid xs={24} sm={12} md={3}>
                                        {editMode &&
                                        whichItem === student?.grade_id ? (
                                            <Input
                                                placeholder="Quiz"
                                                type="success"
                                                mr={1}
                                                value={newNotes?.quiz}
                                                onChange={e =>
                                                    setNewNotes({
                                                        ...newNotes,
                                                        quiz: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <h5>Quiz: {student?.quiz}</h5>
                                        )}
                                    </Grid>
                                    <Grid xs={24} sm={12} md={3}>
                                        {editMode &&
                                        whichItem === student?.grade_id ? (
                                            <Input
                                                placeholder="Homework"
                                                type="success"
                                                mr={1}
                                                value={newNotes?.homework}
                                                onChange={e =>
                                                    setNewNotes({
                                                        ...newNotes,
                                                        homework:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <h5>
                                                Homework: {student?.homework}
                                            </h5>
                                        )}
                                    </Grid>
                                    <Grid xs={24} sm={12} md={2}>
                                        {editMode &&
                                        whichItem === student?.grade_id ? (
                                            <>
                                                <Button
                                                    auto
                                                    type="success"
                                                    iconRight={
                                                        <AiOutlineCheck />
                                                    }
                                                    onClick={() => {
                                                        {
                                                            updateNotes();
                                                            setEditMode(false);
                                                        }
                                                    }}
                                                    mr={1}
                                                ></Button>
                                                <Button
                                                    auto
                                                    type="error"
                                                    iconRight={
                                                        <AiOutlineClose />
                                                    }
                                                    onClick={() => {
                                                        setNewNotes(
                                                            {} as NewNotes
                                                        );
                                                        setWhichItem(0);
                                                        setEditMode(false);
                                                    }}
                                                ></Button>
                                            </>
                                        ) : (
                                            <Button
                                                auto
                                                type="success"
                                                onClick={() => {
                                                    setWhichItem(
                                                        student?.grade_id
                                                    );
                                                    setEditMode(!editMode);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        )}
                                    </Grid>
                                </Grid.Container>
                            );
                        }
                    })}
                </Collapse>
            ))}
        </Collapse.Group>
    );
};

export default Grades;
