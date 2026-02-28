import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import { prisma } from '@/prisma/client'
export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to get users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.message },
        { status: 400 }
      )
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    })
    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
