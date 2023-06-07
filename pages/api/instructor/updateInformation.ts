import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { id, email, phone } = req.body;
        try {
            const instructorId = parseInt(id as string);
            const instructor = await prisma.$queryRaw`
                UPDATE instructors 
                SET email = ${email}, phone = ${phone}
                WHERE id = ${instructorId}
            `;
            res.status(200).json(instructor);
        } catch (error) {
            res.status(400).json({ message: 'Update instructor failed' });
        }
    }
}
