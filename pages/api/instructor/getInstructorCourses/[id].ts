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
        const courseDetails = await prisma.$queryRaw`
    SELECT * FROM courses WHERE id
    IN (SELECT course_id FROM course_instructors WHERE instructor_id = ${id})`;

        res.status(200).json(courseDetails);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
