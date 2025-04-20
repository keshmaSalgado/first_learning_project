import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cars from './pages/cars.jsx'
import CarPage from './pages/carpage.jsx'
import NoPage from './pages/nopage.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cars", element: <Cars /> },
  { path: "/carpage", element: <CarPage /> },
  { path: "*", element: <NoPage /> },


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
