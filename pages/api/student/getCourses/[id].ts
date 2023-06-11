import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<StudentCourses | unknown>
) {
    if (req.method !== 'GET')
        return res.status(405).json({ error: 'Method not allowed' });
    try {
        const id = parseInt(req.query.id as string);
        const data = await prisma.$queryRaw`




        
        SELECT 
        courses.id as id,
        courses.name as course_name,
        courses.code as course_code,
        courses.description as course_description,
        courses.credit as course_credit,
        courses.hours as course_hours,
        student_courses.semester as semester,
        student_courses.year as year,
        departments.name as department_name
        FROM student_courses, courses , departments
        WHERE student_courses.student_id = ${id} 
        AND student_courses.course_id = courses.id 
        AND courses.department_id = departments.id`;

        






        res.status(200).json(data);
    } catch (error: Error | unknown) {
        res.status(500).json({ error: error });
    }
}
