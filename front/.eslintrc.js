module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jest", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    "jest/globals": true,
  },
};
