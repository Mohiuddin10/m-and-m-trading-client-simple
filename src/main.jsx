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
        path: "/client",
        element: <Client></Client>
      },
      {
        path: "/showClients",
        element: <ShowClients></ShowClients>
        // loader: () => fetch("http://localhost:3001/client")
      },
      {
        path: "/UpdateClient/:id",
        element: <UpdateClient></UpdateClient>
      },
      {
        path: "/truckChalan",
        element: <TruckChalan></TruckChalan>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
