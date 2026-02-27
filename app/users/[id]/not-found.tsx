import React from 'react'
import ReturnButton from '../../components/ReturnButton/ReturnButton'

const UserNotFoundPage = () => {
  return (
    <div>
      <ReturnButton backTo='/users' />
      <h1>User Not Found</h1>
      <p>The requested user does not exist.</p>
    </div>
  )
}

export default UserNotFoundPage
