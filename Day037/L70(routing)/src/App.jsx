import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'
import ParamsComp from './components/ParamsComp'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Reports from './components/reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,

      children: [
        {
          path: 'courses',
          element: <Courses />
        },
        {
          path: 'mock-tests',
          element: <MockTest />
        },
        {
          path: 'reports',
          element: <Reports />
        }
      ]
    },
    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar />
        <ParamsComp />
      </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
);

function App() {

  return (
    <div style={{backgroundColor:'grey', height:'100vh'}}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
