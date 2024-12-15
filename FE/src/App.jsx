//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/homePage.jsx";
import Login from "./pages/Login.jsx";
import PasswordReset from "./pages/PasswordReset.jsx";
import Search from "./pages/Search.jsx";
import HomePrivate from "./pages/HomePrivate.jsx";
import SearchPrivate from "./pages/SearchPrivate.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "password-reset",
    element: <PasswordReset />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "user/home",
    element: <HomePrivate />,
  },
  {
    path: "user/search",
    element: <SearchPrivate />,
  },
  {
    path: "admin",
    element: <Dashboard />,
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
