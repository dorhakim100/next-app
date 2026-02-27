import { NextRequest, NextResponse } from 'next/server'

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
