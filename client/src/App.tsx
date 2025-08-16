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
import CheckOut from "./page/checkout/CheckOut";
import NotFoundPage from "./page/NotFound/NotFoundPage";

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
        {
          path: "checkout",
          element: <CheckOut />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginComponent />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={root} />;
}

export default App;
