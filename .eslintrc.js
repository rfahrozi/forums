module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:cypress/recommended'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    'react/prop-types': 'error',
    'react/button-has-type': 'error',
    'react/jsx-one-expression-per-line': 'error',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'acc'] }],
    'object-curly-newline': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off', // jika pakai React 17+
    'no-console': 'off',
    'linebreak-style': 'off',
  },
  settings: { react: { version: 'detect' } },
};
