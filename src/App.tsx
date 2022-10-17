import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Root } from "./components";
import { Home, Clinica, Cursos, Sobre, Tratamentos, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/clinica",
        element: <Clinica />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/tratamento",
        element: <Tratamentos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
