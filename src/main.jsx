import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './root/Root';
import Home from './Home/Home';
import Client from './CompoClient/Client';
import TruckChalan from './TruckChalan/TruckChalan';
import ShowClients from './CompoClient/ShowClients';
import UpdateClient from './CompoClient/UpdateClient';
import FinalTruckChalan from './TruckChalan/ShowChalan/FinalTruckChalan';
import TruckReport from './TruckReport/TruckReport';
import UpdateTruck from './TruckReport/UpdateTruck';
import Login from './authentication/Login';
import Register from './authentication/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import About from './About/About';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <ProtectedRoute><About></About></ProtectedRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/client",
        element: <ProtectedRoute><Client></Client></ProtectedRoute>
      },
      {
        path: "/showClients",
        element: <ProtectedRoute><ShowClients></ShowClients></ProtectedRoute>
        // loader: () => fetch("https://m-and-m-trading-server.onrender.com/client")
      },
      {
        path: "/UpdateClient/:id",
        element: <ProtectedRoute><UpdateClient></UpdateClient></ProtectedRoute>
      },
      {
        path: "/truckChalanEntry",
        element: <ProtectedRoute><TruckChalan></TruckChalan></ProtectedRoute>
      },
      {
        path: "/finalChalan/:id",
        element: <ProtectedRoute><FinalTruckChalan></FinalTruckChalan></ProtectedRoute>,
        loader: async ({ params }) => { return fetch(`https://m-and-m-trading-server.onrender.com/truck/${params.id}`) }
      },
      {
        path: "/truckReport",
        element: <ProtectedRoute><TruckReport></TruckReport></ProtectedRoute>
      },
      {
        path: "/UpdateTruck/:id",
        element: <ProtectedRoute><UpdateTruck></UpdateTruck></ProtectedRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
