import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5 mr-5 text-zinc-800 rounded-md'>
        <h1 className='text-2xl font-bold '>Admin</h1>
      </aside>
      <main>{children}</main>
    </div>
  )
}

export default AdminLayout
