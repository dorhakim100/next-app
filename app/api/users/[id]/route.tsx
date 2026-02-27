import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params

    if (typeof +id !== 'number' || +id > 10) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()

    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
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
    return NextResponse.json(
      { message: 'User updated successfully' },
      { status: 200 }
    )
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
    if (typeof +id !== 'number' || +id > 10) {
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
