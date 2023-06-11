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





            SELECT student_id,students.first_name,students.last_name,
            students.gender , courses.name 
            FROM student_courses,students,courses WHERE student_courses.course_id 
            IN (SELECT course_id FROM course_instructors 
            WHERE course_instructors.instructor_id = ${id})
            AND student_courses.course_id = courses.id 
            AND student_courses.student_id = students.id`;







        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
