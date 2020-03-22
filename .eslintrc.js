module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    "prettier",
    "import"
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      "modules": true
    }
  },
  env: { "node": true, "es6": true },
  rules: {
    'func-names': 'off',
    "prettier/prettier": ["error", {
        "singleQuote": true,
    }]
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:import/errors"
  ],
};
