import SpellDetail from "./SpellDetail";
import { render } from "@testing-library/react";
import { MOCK_SPELL_DETAIL } from "../utilities/mockData";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { act } from "react";
import { screen } from "@testing-library/react";

describe("Spell Detail Page", () => {
  test("displays a spell details when data loads", async () => {
    const routes = [
      {
        path: "/spells/acid-arrow",
        element: <SpellDetail />,
        loader: () => MOCK_SPELL_DETAIL,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/spells/acid-arrow"],
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    const classList = MOCK_SPELL_DETAIL.classes
      .map((classItem) => classItem.name)
      .join(", ");

    expect(screen.queryByText(MOCK_SPELL_DETAIL.name)).toBeInTheDocument();
    expect(screen.queryByText("Available for:")).toBeInTheDocument();
    expect(screen.queryByText(classList)).toBeInTheDocument();
  });

  test("can handle empty data", async () => {
    const routes = [
      {
        path: "/spells/acid-arrow",
        element: <SpellDetail />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/spells/acid-arrow"],
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(
      screen.queryByText("No spell information available")
    ).toBeInTheDocument();
    expect(screen.queryByText("Available for: ")).not.toBeInTheDocument();
  });
});
