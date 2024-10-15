import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

const App = () => {
  return (
    <div >
      <Navbar />

      <hr className='border-neutral-700 my-5' />

      <Landing />
    </div>
  )
}

export default App