import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UserError from "./Components/UserError";
import RestoMenu from "./Components/RestoMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <UserError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restoMenu/:restoId",
        element: <RestoMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
