import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Home, Profile, Settings, NotFound, Signup } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "Home", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      {path: "signup", element: <Signup />},
      {path: "*", element: <NotFound />},
    ],
  },
]);

export default router;
