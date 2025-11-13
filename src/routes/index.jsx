import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Home, Profile, Settings, NotFound, Login, Signup } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      {path: "login", element: <Login />},
      {path: "signup", element: <Signup />},
      {path: "*", element: <NotFound />},
    ],
  },
]);

export default router;
