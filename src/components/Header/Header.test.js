import axe from "axe-core";
import Header from "./Header";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockHeader = (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);

describe("Header Component", () => {
  test("passes accessibility check", async () => {
    const { container } = render(mockHeader);
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });

  it("renders correctly", () => {
    const { asFragment } = render(mockHeader);
    expect(asFragment()).toMatchSnapshot();
  });
});
