import React from 'react'
import { User } from '@/app/types/User/User'
import Link from 'next/link'

import { sort } from 'fast-sort'

interface Props {
  sortOrder: string
}

const UsersTable = async ({ sortOrder = 'name' }: Props) => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const res = await fetch(`http://localhost:3000/api/users`)

  const users: User[] = await res.json()

  let sortedUsers = users
  if (sortOrder === 'name') {
    sortedUsers = sort(users).asc((user) => user.name)
  } else if (sortOrder === 'email') {
    sortedUsers = sort(users).asc((user) => user.email)
  }

  return (
    <table className='table table-zebra table-pin-cols'>
      <thead>
        <tr>
          <th>
            <Link href={`/users?sortOrder=name`}>Name</Link>
          </th>
          <th>
            <Link href={`/users?sortOrder=email`}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable
