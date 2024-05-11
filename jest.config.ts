import type { Config } from "jest"
const nextJest = require("next/jest")
const createJestConfig = nextJest({ dir: "./" })
const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom"
}

module.exports = createJestConfig(config)
