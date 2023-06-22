import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './ErrorPage.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import NewPage from './Components/newPage/NewPage.jsx';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login.jsx';
import Private from './Private/Private.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';
import Welcome from './Welcome.jsx';
import MySelected from './MySelected.jsx';
import Myenrolled from './Myenrolled.jsx';
import SellerRoute from './SellerRoute.jsx';
import AddAClass from './AddAClass.jsx';
import MyClass from './MyClass.jsx';
import ManagesClass from './ManagesClass.jsx';
import AllUsers from './AllUsers.jsx';
import AdminRoute from './AdminROute.jsx';
import toast, { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllClassTogether from './AllClassTogether.jsx';
import Payment from './Payment.jsx';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>

        },

        {
          path: '/allclass',
          element: <AllClassTogether></AllClassTogether>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ],
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/dashboard',
    element: <Private><DashboardLayout></DashboardLayout></Private>,
    children: [
      {
        path: '/dashboard',
        element: <Welcome></Welcome>
      },
      {
        path: '/dashboard/managesclasses',
        element: <AdminRoute><ManagesClass></ManagesClass></AdminRoute>
      },
      {
        path: '/dashboard/managesusers',
        element: <AdminRoute><AllUsers></AllUsers> </AdminRoute>
      },

      {
        path: '/dashboard/addclass',
        element: <SellerRoute><AddAClass></AddAClass></SellerRoute>
      },
      {
        path: '/dashboard/myclass',
        element: <SellerRoute><MyClass></MyClass></SellerRoute>
      },
      {
        path: '/dashboard/myselected',
        element: <Private><MySelected></MySelected></Private>
      },
      {
        path: '/dashboard/myenrolled',
        element: <Private> <Myenrolled></Myenrolled></Private>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: async ({ params }) => fetch(`https://b7a12-summer-camp-server-side-kh-mhb.vercel.app/bookings/${params.id}`)
      },
    ]

  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
