# React Testing with Jest + Reach Testing Library

## Install and config Jest and React Testing Library

```js
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/dom @testing-library/user-event
```

```js
npm install --save-dev jest jest-environment-jsdom ts-jest @types/jest
```

### jest.config.ts

```js
export {};
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".(ts|tsx)": "ts-jest"
  },

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "setupTests.ts",
    "index.tsx"
  ],
  setupFilesAfterEnv: ["./jest.setup.ts"]
};
```

### jest.setup.ts

```js
import "@testing-library/jest-dom";
```

### Create a test script in package.json

```js
    "test": "jest"
```

### In tsconfig.json

```js
  "compilerOptions": {
    "jsx": "react-jsx",
    "allowImportingTsExtensions": true
  }
```

### Create a test file

App.test.tsx

```js
test("dummy test", () => {
  expect(true).toBe(true);
});
```

Run

```js
npm run test
```

## Writing tests

Import necessary modules in test file

```js
import "@testing-library/jest-dom";
```

# BeforeAll

Run before all tests

`````js
beforeAll(() => {
  console.log("beforeAll");
});

# BeforeEach

Run before each test

````js
beforeEach(() => {
  console.log("beforeEach");
});

# AfterEach

Run after each test

````js
afterEach(() => {
  console.log("afterEach");
});

# AfterAll

Run after all tests

````js
afterAll(() => {
  console.log("afterAll");
});

# Unit tests

```js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

function sum(a: number, b: number) {
  return a + b;
}
test("add 2 + 3 should equal 5", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 3)).not.toBe(6);
});
test("adds 1 + 2 to equal 3", () => {
  render(<div>{sum(1, 2)}</div>);
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("Object assignment", () => {
  const obj: { [key: string]: number } = { a: 1, b: 2 };
  expect(obj.a).toBe(1);
  expect(obj.b).toBe(2);
  obj["c"] = 3;
  expect(obj.c).toBe(3);
});

test("there is 'shah' in 'vaddshah'", () => {
  expect("vaddshah").toMatch(/shah/);
});
`````

# Function Unit test

```js
async function fetchData(): Promise<{ status: number, data: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: "Hello" });
    }, 1000);
  });
}
test("fetchData should return 200", async () => {
  const response = await fetchData();
  expect(response.status).toBe(200);
  expect(response.data).toEqual("Hello");
});
```

# Grouping tests

```js
describe("Test promise response", () => {
  test("fetchData should return 200", async () => {
    const response = await fetchData();
    expect(response.status).toBe(200);
    expect(response.data).toEqual("Hello");
  });
  test("fetchData should not return 201", async () => {
    const response = await fetchData();
    expect(response.status).not.toBe(201);
  });
  // More tests
});
```

# Testing components

```js
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
```
