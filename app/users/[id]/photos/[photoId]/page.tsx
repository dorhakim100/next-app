import React from 'react'

interface Props {
  params: Promise<{
    photoId: number
    id: number
  }>
}

const PhotoPage = async ({ params }: Props) => {
  const { photoId, id } = await params
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`
  )
  //   const photo: string = await res.json()
  return (
    <div>
      PhotoPage {photoId} {id}
    </div>
  )
}

export default PhotoPage
