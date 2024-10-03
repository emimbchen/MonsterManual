import axe from "axe-core";
import Footer from "./Footer";
import { render } from "@testing-library/react";

describe("Footer Component", () => {
  test("passes accessibility check", async () => {
    const { container } = render(<Footer />);
    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });

  it("renders correctly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
