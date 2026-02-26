import React from 'react'
import UsersTable from '../components/UsersTable/UsersTable'
import { User } from '../types/User/User'
import { sort } from 'fast-sort'

interface Props {
  searchParams: Promise<{
    sortOrder: string
  }>
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  const users: User[] = await res.json()

  let sortedUsers = users
  if (sortOrder === 'name') {
    sortedUsers = sort(users).asc((user) => user.name)
  } else if (sortOrder === 'email') {
    sortedUsers = sort(users).asc((user) => user.email)
  }
  return (
    <div>
      <UsersTable users={sortedUsers} />
    </div>
  )
}

export default UsersPage
