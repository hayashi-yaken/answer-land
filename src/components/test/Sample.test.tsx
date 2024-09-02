import { Sample } from "../Sample";
import { render, screen } from "@testing-library/react";

const testProps = { title: "Hello, World!" };

describe("Sample", () => {
  it("renders title", () => {
    render(<Sample {...testProps} />);
    const { title } = testProps;
    const screenTitle = screen.getByText(title);
    expect(screenTitle).toBeInTheDocument();
  });
});
