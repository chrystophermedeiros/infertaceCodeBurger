import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Routess from '../src/routes/routes'
import AppProvider from './hooks'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Routess />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyle />
  </React.StrictMode>
)
