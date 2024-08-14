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
        path: "/truckChalanEntry",
        element: <TruckChalan></TruckChalan>
      },
      {
        path: "/finalChalan/:id",
        element: <FinalTruckChalan></FinalTruckChalan>,
        loader: async ({params})=> {return fetch(`http://localhost:3001/truck/${params.id}`)}
      },
      {
        path: "/truckReport",
        element: <TruckReport></TruckReport>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
