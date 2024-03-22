import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home';
import Pakagedetails from './component/Pakegedetails/Pakagedetails'
import DashBoard from "../src/component/DashBoard/DahBoard"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDestination from './component/CountryDestination/CountryDestination';
import DashBoardPreview from './component/DashBoard/DashBoardPreview';
import Profile from './component/DashBoard/Profile';
import Booking from './component/DashBoard/Booking';
import Cards from './component/DashBoard/Cards';
import WishList from './component/DashBoard/WishList';
import Comment from './component/Pakegedetails/Comment';
import RightsideStylebar from './component/practice/RightsideStylebar';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
  },
  {
    path: "/pakagedetails",
    element:<Pakagedetails/>,
  },
  {
    path:"/comments/:index",
    element:<Comment/>
  },
  {
    path: "/country_destination",
    element:<CountryDestination/>
  },
  {
    path: "/rightsidebar",
    element:<RightsideStylebar/>
  },
  {
    path: "/dashboard",
    element:<DashBoard/>,
    children:[
      {
        path:"/dashboard",
        element:<DashBoardPreview/>
      },
      {
        path:"profile",
        element:<Profile/>,
      
      },
      {
        path:"booking",
        element:<Booking/>
      },
      {
        path:"cards",
        element:<Cards/>
      },
      {
        path:"wishlist",
        element:<WishList/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
