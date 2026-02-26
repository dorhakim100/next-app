import React from 'react'

interface Props {
  params: Promise<{
    slug: string[]
  }>
  searchParams: Promise<{
    name: string
    price: string
  }>
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params
  const { name, price } = await searchParams
  return (
    <div>
      ProductPage {slug.join(', ') || 'No slug'} {name} {price}
    </div>
  )
}

export default ProductPage
