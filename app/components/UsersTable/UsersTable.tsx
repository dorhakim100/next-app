import React from 'react'
import { User } from '@/app/types/User/User'
import Link from 'next/link'
import useSearchParams from 'next/navigation'

const UsersTable = ({ users }: { users: User[] }) => {
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
        {users.map((user: User) => (
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
