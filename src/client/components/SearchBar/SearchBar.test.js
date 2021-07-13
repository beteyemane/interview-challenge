import React from "react";
import "babel-polyfill";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Input value", () => {
  it("updates on change", () => {
    const setQuery = jest.fn((value) => {});

    render(<SearchBar setQuery={setQuery} />);

    const searchInput = screen.getByTestId("search-bar-element");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
