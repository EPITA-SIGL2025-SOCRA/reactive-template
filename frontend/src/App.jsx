import React from "react";
import { AppContext, reducer, initialState } from "./AppContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppBar } from "./AppBar";
import { Basket } from "./Basket";
import { Catalog } from "./Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/catalog",
        index: true,
        element: <Catalog />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);

function Layout() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <AppBar />
        <main>
          <Outlet />
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
