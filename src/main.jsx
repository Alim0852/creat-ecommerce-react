import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/contact.jsx'
import SingleProduct from './pages/singlepage-product.jsx'
import Layout from './Layout.jsx'
import { CircularProgress } from '@mui/material'


const router = createBrowserRouter([
  {
    path: "/",
    element: < Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      
      {
        path:"/products/:id",
        element:<SingleProduct />
      },
      {
        path: "*",
        element: <CircularProgress />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)