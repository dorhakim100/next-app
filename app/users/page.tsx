import React, { Suspense } from 'react'
import UsersTable from '../components/UsersTable/UsersTable'

import Link from 'next/link'

interface Props {
  searchParams: Promise<{
    sortOrder: string
  }>
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams

  return (
    <div>
      <Link
        href='/users/new'
        className='btn btn-primary mb-5'
      >
        New User
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default UsersPage
