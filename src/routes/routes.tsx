import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Layout from "./Layout";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
