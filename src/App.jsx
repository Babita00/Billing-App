import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import FeaturePage from "./components/FeaturePage/FeaturePage";
import PricingPage from "./components/PricingPage/PricingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import Path from "./Path";
import Main from "./Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Path />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "feature",
        element: <FeaturePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "main",
        element: <Main />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
