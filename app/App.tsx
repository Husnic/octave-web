import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/home";
import About from "./routes/about";
import Services from "./routes/services";
import Contact from "./routes/contact";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
