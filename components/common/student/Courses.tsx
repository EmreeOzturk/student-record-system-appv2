import React, { useState, useEffect } from 'react';
import { Table } from '@geist-ui/core';
const StudentCourses = ({ id }: { id: string }) => {
    const [studentCourses, setStudentCourses] = useState<StudentCourses[]>();
    useEffect(() => {
        const getStudentCourses = async () => {
            const response = await fetch(`
            /api/student/getCourses/${id}
            `);
            const data = await response.json();
            setStudentCourses(data);
        };
        getStudentCourses();
    }, [id]);
    return (
        <div>
            <Table data={studentCourses}>
                <Table.Column prop="course_code" label="Code" />
                <Table.Column prop="course_name" label="Name" />
                <Table.Column prop="course_description" label="Description" />
                <Table.Column prop="course_credit" label="Credit" />
                <Table.Column prop="course_hours" label="Hours" />
                <Table.Column prop="semester" label="Semester" />
                <Table.Column prop="year" label="Year" />
                <Table.Column prop="department_name" label="Department Name" />
            </Table>
        </div>
    );
};

export default StudentCourses;
