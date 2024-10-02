import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpellList from "./pages/SpellList";
import SpellDetail from "./pages/SpellDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { getAllSpells, getSpellById } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <SpellList />,
        loader: getAllSpells,
      },
      {
        path: "/spells/:id",
        element: <SpellDetail />,
        loader: getSpellById,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
