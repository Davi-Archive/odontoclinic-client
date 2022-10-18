import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Root } from "./components";
import { Home, Clinica, Cursos, Sobre, Tratamentos, ErrorPage,Contato,Videos } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/tratamentos",
        element: <Tratamentos />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
