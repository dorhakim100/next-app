import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import { prisma } from '@/prisma/client'
interface Props {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    if (typeof +id !== 'number') {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to get user' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.message },
        { status: 400 }
      )
    }
    const user = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        name: body.name,
        email: body.email,
      },
    })
    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    if (typeof +id !== 'number') {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }
    const deletedUser = await prisma.user.delete({
      where: {
        id: +id,
      },
    })
    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
