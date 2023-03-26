import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import App from './components/App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='*' element={<Pagina404/>}/>
    </Routes>
  </BrowserRouter>
)
