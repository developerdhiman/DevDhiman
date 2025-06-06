import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Root from './Layouts/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/projects',
        Component: Projects
      },
      {
        path: '/skills',
        Component: Skills
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
