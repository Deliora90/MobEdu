import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Main from "./Main";

describe("Testing Main component", () => {
  it("Should render input for first number", () => {
    render(<Main />);
    const numFirst = screen.getByLabelText("numFirst", { selector: "input" });
    expect(numFirst).toBeInTheDocument();
  });
  it("Should render input for second number", () => {
    render(<Main />);
    const numSecond = screen.getByLabelText("numSecond", { selector: "input" });
    expect(numSecond).toBeInTheDocument();
  });
  it("Sum 23 and 44 should equals 67", () => {
    render(<Main />);
    const numFirst = screen.getByLabelText("numFirst", { selector: "input" });
    const numSecond = screen.getByLabelText("numSecond", { selector: "input" });
    const getSum = screen.getByRole("button", { name: /getSumClick/i });

    expect(screen.queryByText(/Результат суммирования: 67/i)).toBeNull();

    // Events
    userEvent.type(numFirst, "23");
    userEvent.type(numSecond, "44");
    userEvent.click(getSum);

    // Result
    expect(screen.queryByText(/Результат суммирования: 67/i)).toBeInTheDocument();
  });
});
