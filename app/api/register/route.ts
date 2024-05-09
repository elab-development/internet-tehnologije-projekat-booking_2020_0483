import {NextResponse} from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { Prisma } from "@prisma/client";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        email,
        name,
        password,
    } = body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            }
        });
        return NextResponse.json(user);
    } catch (e: any) {
        if(e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                console.error('There is a unique constraint violation, a new user cannot be created with this email');
                return NextResponse.json({error: 'This email is already taken. Try another email'}, {status: 409});
            } else {
                console.error('Error creating user:', e);
                return NextResponse.json({error: 'Internal Server Error', status: 500});
            }
        }
        throw e;
    }
}