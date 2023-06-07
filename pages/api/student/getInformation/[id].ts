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
        students.id as id,
        students.first_name as first_name,
        students.last_name as last_name,
        students.birth_date as birth_date,
        students.gender as gender,
        students.email as email,
        students.phone as phone,
        students.address as address,
        students.enrollment_date as enrollment_date,
        departments.name as department_name
    
        FROM students , departments 
        WHERE students.id = ${id} AND students.department_id = departments.id`;

        res.status(200).json(data);
    } catch (error: Error | unknown) {
        res.status(500).json({ error: error });
    }
}
