/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: "ts-jest",
  testPathIgnorePatterns: ["dist"],
  resolver: "jest-ts-webcompat-resolver",
};
