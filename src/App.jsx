import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  CalendarPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "calendar",
        element: <CalendarPage />
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
