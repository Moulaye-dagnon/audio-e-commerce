import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./page/home/Home";
import Headphone from "./page/headphone/Headphone";
import Speaker from "./page/speaker/Speaker";
import Earphone from "./page/earphone/Earphone";
import HeadphoneDetail from "./page/headphoneDetail/HeadphoneDetail";
import SpeakerDetail from "./page/speakerDetail/SpeakerDetail";
import EarphoneDetail from "./page/earphoneDetail/EarphoneDetail";
import LoginComponent from "./page/login/LoginComponent";

function App() {
  const root = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "headphone",
          element: <Headphone />,
        },
        {
          path: "speaker",
          element: <Speaker />,
        },
        {
          path: "earphone",
          element: <Earphone />,
        },
        {
          path: "headphone/:slug",
          element: <HeadphoneDetail />,
        },
        {
          path: "speaker/:slug",
          element: <SpeakerDetail />,
        },
        {
          path: "earphone/:slug",
          element: <EarphoneDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginComponent />,
    },
  ]);

  return <RouterProvider router={root} />;
}

export default App;
