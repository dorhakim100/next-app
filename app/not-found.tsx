import React from 'react'
import ReturnButton from './components/ReturnButton/ReturnButton'

const NotFoundPage = () => {
  return (
    <div>
      <ReturnButton />
      <h1>Not Found</h1>
      <p>The requested page does not exist.</p>
    </div>
  )
}

export default NotFoundPage
