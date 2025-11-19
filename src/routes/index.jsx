import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Home, Profile, Settings, NotFound, Login, Signup, Program, Task } from "@/pages";
import RequireAuth from '@/components/RequireAuth'
import RootRedirect from '@/components/RootRedirect'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // Render Home when logged in; otherwise show Login
      { index: true, element: <RootRedirect /> },
      // Protect Home route
      { path: "Home", element: <Home />},
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "program", element: <Program /> },
      { path: "task", element: <Task /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
