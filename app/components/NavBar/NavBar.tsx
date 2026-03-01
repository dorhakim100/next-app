import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex gap-4 justify-center items-center mb-5  p-5 rounded-md'>
      <Link
        href='/'
        className='btn btn-ghost'
      >
        Home
      </Link>
      <Link
        href='/admin'
        className='btn btn-ghost'
      >
        Admin
      </Link>
      <Link
        href='/users'
        className='btn btn-ghost'
      >
        Users
      </Link>
      <Link
        href='/upload'
        className='btn btn-ghost'
      >
        Upload
      </Link>
      <Link
        href='/api/auth/signin'
        className='btn btn-ghost'
      >
        Sign In
      </Link>
    </nav>
  )
}

export default NavBar
