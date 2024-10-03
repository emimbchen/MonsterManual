import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpellList, { getAllSpells } from "./pages/SpellList";
import SpellDetail, { getSpellById } from "./pages/SpellDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

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
