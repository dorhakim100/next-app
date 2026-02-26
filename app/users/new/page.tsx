import React from 'react'
import ReturnButton from '../../components/ReturnButton/ReturnButton'

const NewUserPage = () => {
  return (
    <div>
      <header className='flex justify-start items-center mb-5 gap-2'>
        <ReturnButton />
        <h1>New User</h1>
      </header>
      <form>
        <input
          type='text'
          placeholder='Name'
        />
      </form>
    </div>
  )
}

export default NewUserPage
