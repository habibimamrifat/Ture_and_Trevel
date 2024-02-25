import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home';
import Pakagedetails from './component/Pakegedetails/Pakagedetails'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
;


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path: "/pakagedetails",
    element:<Pakagedetails/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
