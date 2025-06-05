import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Root from './Layouts/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root/>
    </RouterProvider>
  </StrictMode>,
)
