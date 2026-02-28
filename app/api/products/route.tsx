import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import { prisma } from '@/prisma/client'

export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to get products' }, { status: 500 })
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
    const product = await prisma.product.create({
      data: { name: body.name, price: body.price },
    })
    return NextResponse.json(product)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
