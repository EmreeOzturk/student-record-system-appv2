import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
    try {
        const id = parseInt(req.query.id as string);
        const body = req.body;
        const data = await prisma.$queryRaw`





        UPDATE grades
        SET midterm_grade = ${parseInt(body.midterm_grade)},
        final_grade = ${parseInt(body.final_grade)}, 
        quiz = ${parseInt(body.quiz)}, 
        homework = ${parseInt(body.homework)}
        WHERE id = ${id}`;






        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
