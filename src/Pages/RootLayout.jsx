import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
     
    </>
  )
}

export default RootLayout
