import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { id, email, phone, address } = req.body;
        try {
            const studentId = parseInt(id as string);
            const student = await prisma.$queryRaw`
                UPDATE students 
                SET email = ${email}, phone = ${phone}, address = ${address}
                WHERE id = ${studentId}
            `;


            res.status(200).json(student);
        } catch (error) {
            res.status(400).json({ message: 'Update student failed' });
        }
    }
}
