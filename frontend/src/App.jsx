import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'

const App = () => {
  return (
    <>
      <div className='bg-gray-800 h-screen w-full flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
        </Routes>
      </div>
    </>
  )
}

export default App