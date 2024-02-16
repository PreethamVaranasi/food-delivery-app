import ReactDom from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenuCard from "./src/components/RestaurantMenuCard";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenuCard />,
      },
    ],
    errorElement: <div>Opps Something went wrong !!</div>,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
