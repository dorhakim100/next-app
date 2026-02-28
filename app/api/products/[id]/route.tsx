import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import { prisma } from '@/prisma/client'

interface Props {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    const product = await prisma.product.findUnique({
      where: { id: +id },
    })
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to get product' }, { status: 500 })
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
    const product = await prisma.product.update({
      where: { id: +id },
      data: { name: body.name, price: body.price },
    })
    return NextResponse.json(product)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    await prisma.product.delete({
      where: { id: +id },
    })
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}
