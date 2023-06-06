import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Events | unknown>
) {
    if (req.method !== 'GET')
        return res.status(405).json({ error: 'Method not allowed' });
    try {
        const data: Events[] = await prisma.$queryRaw`
        SELECT *
        FROM events`;

        const fixDate = data.map((item: Events) => {
            return {
                ...item,
                event_date: new Date(item.event_date).toLocaleDateString(),
            };
        });

        res.status(200).json(fixDate);
    } catch (error: Error | unknown) {
        res.status(500).json({ error: error });
    }
}
