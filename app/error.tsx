'use client'
import React from 'react'
import ReturnButton from './components/ReturnButton/ReturnButton'

interface Props {
  error: Error
  reset: () => void
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log(error)

  return (
    <>
      <div>
        <ReturnButton backTo='/' />
        <h1>Error</h1>
        <p>An error occurred while loading the page.</p>
      </div>
      <button
        className='btn btn-primary'
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  )
}

export default ErrorPage
