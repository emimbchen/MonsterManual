import SpellList from "./SpellList";
import { fireEvent, render } from "@testing-library/react";
import { MOCK_SPELL_LIST } from "../utilities/mockData";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { act } from "react";
import { screen } from "@testing-library/react";

describe("Spell List Page", () => {
  let router;
  beforeEach(() => {
    const routes = [
      {
        path: "/",
        element: <SpellList />,
        loader: () => MOCK_SPELL_LIST,
      },
    ];
    router = createMemoryRouter(routes, { initialEntries: ["/"] });
  });

  test("displays a list of spells when data loads", async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    const listItems = screen.getAllByRole("listitem");
    const listCount = MOCK_SPELL_LIST.length;

    expect(listItems).toHaveLength(listCount);
    expect(screen.getByText(`Spells (${listCount})`)).toBeInTheDocument();
  });

  test("filter select works", async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    //select level from dropdown
    const dropdown = screen.getByTestId("level-select");
    fireEvent.change(dropdown, { target: { value: "1" } });

    //check filtered items
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.queryByText("Aid")).not.toBeInTheDocument();
  });

  test("displays no spells message ", async () => {
    const routes = [
      {
        path: "/",
        element: <SpellList />,
        loader: () => [],
      },
    ];
    router = createMemoryRouter(routes, { initialEntries: ["/"] });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(screen.queryByText("No Spells found")).toBeInTheDocument();
  });
});
