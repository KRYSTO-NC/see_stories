import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './sass/main.css'

import ScrollToTop from './components/utils/ScrollToTop'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />

      <>
        <main>
          <Outlet />
        </main>
      </>
    </>
  )
}

export default App
