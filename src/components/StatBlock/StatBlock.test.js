import axe from "axe-core";
import StatBlock from "./StatBlock";
import { render, screen } from "@testing-library/react";
import { MOCK_STAT } from "../../utilities/mockData";

const mockStatBlock = (
  <StatBlock label={MOCK_STAT.label} value={MOCK_STAT.value} />
);

describe("StatBlock Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(mockStatBlock);
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });

  it("renders correctly", () => {
    const { asFragment } = render(mockStatBlock);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays values", () => {
    render(mockStatBlock);
    const label = screen.getByText(MOCK_STAT.label);
    const value = screen.getByText(MOCK_STAT.value);
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("handles empty input", () => {
    const { container } = render(<StatBlock />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
