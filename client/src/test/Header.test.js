import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../container/Header";

describe("Header container", () => {
  test("Should render the title", () => {
    render(<Header />);
    const title = screen.getByText(/unit converter/i);
    expect(title).toBeInTheDocument();
  });
});
