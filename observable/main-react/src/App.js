import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceItem from "./components/ServiceItem";
import Service from "./components/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Service />,
  },
  {
    path: "/:id/details",
    element: <ServiceItem />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;