'use client'
import React from 'react'
import { useState } from 'react'
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary'

export default function UploadImg() {
  const [resource, setResource] = useState<
    CloudinaryUploadWidgetInfo | undefined
  >(undefined)

  return (
    <CldUploadWidget
      signatureEndpoint='/api/sign-cloudinary-params'
      onSuccess={(result, { widget }) => {
        console.log(result)
        setResource(result?.info as CloudinaryUploadWidgetInfo) // { public_id, secure_url, etc }
      }}
      onQueuesEnd={(result, { widget }) => {
        widget.close()
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setResource(undefined)
          open()
        }
        return (
          <button
            onClick={handleOnClick}
            className='btn btn-primary'
          >
            Upload an Image
          </button>
        )
      }}
    </CldUploadWidget>
  )
}
