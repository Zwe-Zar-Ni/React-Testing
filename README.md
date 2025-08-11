# React Testing with Jest + Reach Testing Library

## Install and config Jest and Reach Testing Library

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

App.test.ts

```js
test("dummy test", () => {
  expect(true).toBe(true);
});
```

Run

```js
npm run test
```
