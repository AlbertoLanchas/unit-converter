import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Footer from "../container/Footer";

describe("Footer container", () => {
  test("Should render the terms condition", () => {
    render(<Footer />);
    const title = screen.getByText(/terms of service/i);
    expect(title).toBeInTheDocument();
  });

  test("Should render the terms condition", () => {
    render(<Footer />);
    const title = screen.getByText(/privacy policy/i);
    expect(title).toBeInTheDocument();
  });
});
