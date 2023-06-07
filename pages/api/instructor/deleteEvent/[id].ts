import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'DELETE') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
    try {
        const id = parseInt(req.query.id as string);
        const data = await prisma.$queryRaw`
        DELETE FROM events WHERE id = ${id}`;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
