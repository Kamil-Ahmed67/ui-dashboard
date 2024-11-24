import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inbox from './components/Inbox.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import PropertyCards from './components/PropertyCards.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <PropertyCards></PropertyCards>,
            loader: () => fetch('../property.json'),
          },
          {
            path: "/type/:cat",
            element: <PropertyCards></PropertyCards>,
            loader: () => fetch('../property.json'),
          }
        ]
      },
      {
        path: "/inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
