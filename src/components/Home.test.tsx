import "@testing-library/jest-dom";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

// beforeAll(() => {
//   console.log("beforeAll");
// });
// beforeEach(() => {
//   console.log("beforeEach");
// });
// afterEach(() => {
//   console.log("afterEach");
// });
// afterAll(() => {
//   console.log("afterAll");
// });

// Unit test
// function sum(a: number, b: number) {
//   return a + b;
// }
// test("add 2 + 3 should equal 5", () => {
//   expect(sum(2, 3)).toBe(5);
//   expect(sum(2, 3)).not.toBe(6);
// });
// test("adds 1 + 2 to equal 3", () => {
//   render(<div>{sum(1, 2)}</div>);
//   expect(screen.getByText("3")).toBeInTheDocument();
// });

// test("Object assignment", () => {
//   const obj: { [key: string]: number } = { a: 1, b: 2 };
//   expect(obj.a).toBe(1);
//   expect(obj.b).toBe(2);
//   obj["c"] = 3;
//   expect(obj.c).toBe(3);
// });

// test("there is 'shah' in 'vaddshah'", () => {
//   expect("vaddshah").toMatch(/shah/);
// });

// Function Unit test
// async function fetchData(): Promise<{ status: number; data: string }> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ status: 200, data: "Hello" });
//     }, 1000);
//   });
// }
// test("fetchData should return 200", async () => {
//   const response = await fetchData();
//   expect(response.status).toBe(200);
//   expect(response.data).toEqual("Hello");
// });

// Grouping tests
// describe("Test promise response", () => {
//   test("fetchData should return 200", async () => {
//     const response = await fetchData();
//     expect(response.status).toBe(200);
//     expect(response.data).toEqual("Hello");
//   });
//   test("fetchData should not return 201", async () => {
//     const response = await fetchData();
//     expect(response.status).not.toBe(201);
//   });
// });

// Testing components
describe("Testing Home component", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("Should render a heading", () => {
    const heading = screen.getByText(/Home/i);
    expect(heading).toBeInTheDocument();
  });
  it("Should be an h1 tag", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  // Test by test id
  // in component, <p data-testid="desc">...</p>
  it("Should render a description", () => {
    const desc = screen.getByTestId("desc");
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent("Hello World");
    // expect(desc.textContent).toEqual("Hello World");
    // expect(desc.textContent).toMatch(/Hello World/);
  });
});
