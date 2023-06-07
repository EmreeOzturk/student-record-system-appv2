import React, { useState, useEffect } from 'react';
import { Collapse, Grid } from '@geist-ui/core';
const Courses = ({ id }: { id: string }) => {
    const [courses, setCourses] = useState<InstructorCourses[]>();
    const [students, setStudents] = useState<CourseStudents[]>();
    useEffect(() => {
        const getCourses = async () => {
            const res = await fetch(
                `/api/instructor/getInstructorCourses/${id}`
            );
            const data = await res.json();
            console.log(data);
            setCourses(data);
        };

        const getCourseStudents = async () => {
            const res = await fetch(`/api/instructor/getCourseStudents/${id}`);
            const data = await res.json();
            setStudents(data);
            console.log(data);
        };
        getCourses();
        getCourseStudents();
    }, []);
    return (
        <Collapse.Group w="90%" margin="auto">
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
                        if (student?.name === course?.name) {
                            return (
                                <Grid.Container
                                    // gap={4}
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
                                        paddingLeft: '6rem',
                                        display: 'flex !important',
                                    }}
                                >
                                    <Grid xs={24} sm={12} md={6}>
                                        <h4>
                                            Student ID: {student?.student_id}
                                        </h4>
                                    </Grid>
                                    <Grid xs={24} sm={12} md={6}>
                                        <h4>
                                            Firstname: {student?.first_name}
                                        </h4>
                                    </Grid>
                                    <Grid xs={24} sm={12} md={6}>
                                        <h4>Lastname: {student?.last_name}</h4>
                                    </Grid>
                                    <Grid xs={24} sm={12} md={6}>
                                        <h4>
                                            Gender:{' '}
                                            {student?.gender === 'm'
                                                ? 'Male'
                                                : 'Female'}
                                        </h4>
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

export default Courses;
