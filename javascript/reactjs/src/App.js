import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
