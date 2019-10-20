module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env:{
    "jest": true,
    "browser": true
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js",".ts", ".tsx"] }],
  },
  settings: {
    "import/extensions": [
      ".js",
      ".ts",
      ".tsx"
    ],
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".tsx"
        ],
        "paths": [
          "src"
        ]
      }
    }
  }
};
