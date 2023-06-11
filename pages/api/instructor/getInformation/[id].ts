import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<StudentInformation | unknown>
) {
    if (req.method !== 'GET')
        return res.status(405).json({ error: 'Method not allowed' });
    try {
        const id = parseInt(req.query.id as string);
        const data = await prisma.$queryRaw`





        SELECT 
        instructors.id as id,
        instructors.first_name as first_name,
        instructors.last_name as last_name,
        instructors.birth_date as birth_date,
        instructors.gender as gender,
        instructors.email as email,
        instructors.phone as phone,
        departments.name as department_name
        FROM instructors , departments WHERE instructors.id = ${id} 
        AND instructors.department_id = departments.id`;





        res.status(200).json(data);
    } catch (error: Error | unknown) {
        res.status(500).json({ error: error });
    }
}
