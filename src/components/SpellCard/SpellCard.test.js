import axe from "axe-core";
import SpellCard from "./SpellCard";
import { MOCK_SPELL } from "../../utilities/mockData";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockSpellCard = (
  <MemoryRouter>
    <SpellCard spell={MOCK_SPELL} />
  </MemoryRouter>
);

describe("Spell Card Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(mockSpellCard);
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });

  it("renders correctly", () => {
    const { asFragment } = render(mockSpellCard);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays values", () => {
    render(mockSpellCard);
    const nameElement = screen.getByText(MOCK_SPELL.name);
    const levelElement = screen.getByText("Level " + MOCK_SPELL.level);

    expect(nameElement).toBeInTheDocument();
    expect(levelElement).toBeInTheDocument();
  });
});
