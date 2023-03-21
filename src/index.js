import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/Layout";
import Post, { loader } from "./routes/Post";
import CreateTodo from "./routes/createTodo";
import { action as CreatePostAction } from "./routes/createTodo";
import "./global.css";
import Details, { loder as detailsLoder } from "./routes/Dtail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/create-post",
        element: <CreateTodo />,
        action: CreatePostAction,
      },
      { path: "/", element: <Post />, loader: loader },
      { path: "/:id", element: <Details />, loader: detailsLoder },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
