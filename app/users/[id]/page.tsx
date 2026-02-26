import React from 'react'
import { User } from '@/app/types/User/User'

interface Props {
  params: Promise<{
    id: number
  }>
}

const UserDetailsPage = async ({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user: User = await res.json()

  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div>
      <h1> {user.name}</h1>
      <p> {user.email}</p>
    </div>
  )
}

export default UserDetailsPage
