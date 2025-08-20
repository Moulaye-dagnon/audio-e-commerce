import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
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
import { RegisterComponent } from "./page/register/RegisterComponent";

function App() {
  const root = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="headphone" element={<Headphone />} />
          <Route path="speaker" element={<Speaker />} />
          <Route path="earphone" element={<Earphone />} />
          <Route path="headphone/:slug" element={<HeadphoneDetail />} />
          <Route path="speaker/:slug" element={<SpeakerDetail />} />
          <Route path="earphone/:slug" element={<EarphoneDetail />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={root} />;
}

export default App;
