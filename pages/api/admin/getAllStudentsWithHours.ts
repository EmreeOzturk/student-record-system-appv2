import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getAllStudentsWithHours(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const data: AllStudentsWithHours[] = await prisma.$queryRaw`




            
        SELECT students.id, students.first_name, students.last_name, SUM(courses.hours)
        as total_hours
        FROM students
        JOIN student_courses ON students.id = student_courses.student_id
        JOIN courses ON student_courses.course_id = courses.id
        WHERE student_courses.semester = 2
        GROUP BY students.id, students.first_name, students.last_name
        `;





            const response = data.map((student: AllStudentsWithHours) => {
                return {
                    id: student.id,
                    first_name: student.first_name,
                    last_name: student.last_name,
                    total_hours: Number(student.total_hours),
                };
            });

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
    }
}
