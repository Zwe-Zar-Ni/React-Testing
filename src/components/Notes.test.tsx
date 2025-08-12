import "@testing-library/jest-dom";
import Notes from "./Notes";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing Notes component", () => {
  beforeEach(() => {
    render(<Notes />);
  });
  it("Should render a heading", () => {
    const heading = screen.getByText(/Notes/i);
    expect(heading).toBeInTheDocument();
  });
  it("Should render a form", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("Should render an input", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  it("Should render a button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("Button should be disabled.", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it("Fill input to make button enabled.", () => {
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input).toHaveValue("Hello");
    expect(button).not.toBeDisabled();
  });
  it("Should render a list", () => {
    const list = screen.getByTestId("notes-list");
    expect(list).toBeInTheDocument();
  });
  it("List should have 0 items", () => {
    const list = screen.getByTestId("notes-list");
    // expect(list.querySelectorAll("li")).toHaveLength(0);
    expect(list.children).toHaveLength(0);
  });
  it("Add a note, and list should have 2 items", () => {
    const list = screen.getByTestId("notes-list");
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "World" } });
    fireEvent.click(button);
    expect(list.children).toHaveLength(2);
  });
});
