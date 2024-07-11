import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataProvider } from './components/Data'

import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Ghg from './pages/Ghg'
import Scope1 from './pages/Scope1'
import Scope2 from './pages/Scope2'
import Scope3 from './pages/Scope3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/calculator',
    element: <Calculator />
  }, 
  {
    path: '/calculator/ghg',
    element: <Ghg/>,
    children: [
			{
				path: 'scope1',
				element: <Scope1 />,
			},
			{
				path: 'scope2',
				element: <Scope2 />,
			},
      {
				path: 'scope3',
				element: <Scope3 />,
			},
		],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
