import "@testing-library/jest-dom";
import Todos from "./Todos";
import { render, screen, waitFor } from "@testing-library/react";

const originalFetch = window.fetch;

describe("Testing Todos component", () => {
  afterEach(() => {
    window.fetch = originalFetch;
  });

  it("Should render todo list.", async () => {
    const mockData = [
      { title: "Todo 1", completed: false },
      { title: "Todo 2", completed: true },
      { title: "Todo 3", completed: false },
      { title: "Todo 4", completed: true },
      { title: "Todo 5", completed: false }
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    );
    render(<Todos />);
    await waitFor(() => {
      const todos = screen.getByTestId("todos-list");
      expect(todos).toBeInTheDocument();
      expect(todos.children).toHaveLength(5);
      expect(todos.children[0]).toHaveTextContent("Todo 1");
    });

    expect(window.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
  });

  it("Should render photos list.", async () => {
    const mockData = [
      { title: "Photo 1" },
      { title: "Photo 2" },
      { title: "Photo 3" },
      { title: "Photo 4" },
      { title: "Photo 5" }
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    );
    render(<Todos />);
    await waitFor(() => {
      const photos = screen.getByTestId("photos-list");
      expect(photos).toBeInTheDocument();
      expect(photos.children).toHaveLength(5);
      expect(photos.children[0]).toHaveTextContent("Photo 1");
    });

    expect(window.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/photos"
    );
  });
});
