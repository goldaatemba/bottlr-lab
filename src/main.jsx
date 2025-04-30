import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset/modern-normalize.css'
import './reset/custom-reset.css'
import './Css/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routers.jsx'

const router = createBrowserRouter(routes) 

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)