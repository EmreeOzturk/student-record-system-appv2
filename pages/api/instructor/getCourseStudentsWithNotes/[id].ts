import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
    try {
        const id = parseInt(req.query.id as string);
        const data = await prisma.$queryRaw`
            SELECT 
            students.id as student_id,
            students.first_name as first_name,
            students.last_name as last_name,
            grades.id as grade_id,
            grades.midterm_grade as midterm_grade,
            grades.final_grade as final_grade,
            grades.quiz  as quiz,
            grades.homework as homework,
            student_courses.course_id as course_id
            FROM students, grades , student_courses
            WHERE  student_courses.course_id 
            IN 
            (SELECT course_instructors.course_id 
            FROM course_instructors WHERE course_instructors.instructor_id = ${id})
            AND student_courses.student_id = students.id
            AND grades.student_id = students.id
            AND grades.course_id = student_courses.course_id`;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
