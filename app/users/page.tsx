import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UsersPage
