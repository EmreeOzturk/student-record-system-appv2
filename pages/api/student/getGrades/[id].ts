import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<StudentGrades | unknown>
) {
    if (req.method !== 'GET')
        return res.status(405).json({ error: 'Method not allowed' });
    try {
        const id = parseInt(req.query.id as string);
        const data: StudentGrades[] = await prisma.$queryRaw`
        SELECT
        courses.code as course_code,
        courses.name as course_name,
        grades.midterm_grade as midterm_grade,
        grades.final_grade as final_grade,
        grades.quiz as quiz,
        grades.homework as homework
        FROM grades,courses 
        WHERE grades.student_id = ${id} 
        AND grades.course_id = courses.id`;

        const withAverage = data.map((item: StudentGrades) => {
            return {
                ...item,
                average:
                    (item.midterm_grade +
                        item.final_grade +
                        item.quiz +
                        item.homework) /
                    4,
            };
        });

        res.status(200).json(withAverage);
    } catch (error: Error | unknown) {
        res.status(500).json({ error: error });
    }
}
