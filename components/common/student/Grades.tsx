import React, { useState, useEffect } from 'react';
import { Table } from '@geist-ui/core';
const Grades = ({ id }: { id: string }) => {
    const [studentGrades, setStudentGrades] = useState<StudentGrades[]>();
    useEffect(() => {
        const getStudentGrades = async () => {
            const response = await fetch(`
            /api/student/getGrades/${id}
            `);
            const data = await response.json();
            setStudentGrades(data);
        };
        getStudentGrades();
    }, [id]);

    //course code
    //course name
    //midterm_grade
    //final_grade
    //quiz
    //homework
    //average

    return (
        <div>
            <Table data={studentGrades}>
                <Table.Column prop="course_code" label="Course Code" />
                <Table.Column prop="course_name" label="Course Name" />
                <Table.Column prop="midterm_grade" label="Midterm Grade" />
                <Table.Column prop="final_grade" label="Final Grade" />
                <Table.Column prop="quiz" label="Quiz" />
                <Table.Column prop="homework" label="Homework" />
                <Table.Column prop="average" label="Average" />
            </Table>
        </div>
    );
};

export default Grades;
