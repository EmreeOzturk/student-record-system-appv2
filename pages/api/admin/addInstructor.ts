import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function addInstructor(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const {
            first_name,
            last_name,
            email,
            phone,
            department_id,
            gender,
            birth_date,
        } = req.body;

        const newDepartmentId = Number(department_id);
        try {
            const data = await prisma.$queryRaw`
            INSERT INTO instructors
            (first_name, last_name, birth_date, gender ,email, phone, department_id)
            VALUES (${first_name}, ${last_name}, 
            ${new Date(
                birth_date
            )}, ${gender},${email}, ${phone}, ${newDepartmentId})`;
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
