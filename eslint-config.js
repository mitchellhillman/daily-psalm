module.exports = {
  extends: ['airbnb'],
  plugins: ['react-hooks'],
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-plusplus': 'off'
  },
  overrides: [{
    files: ['*.spec.jsx', '*.spec.js', '**/__test__/**'],
    env: { jest: true },
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/prop-types': 'off'
    }
  }, {
    files: ['.storybook/**', '**/stories/**'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'react/prop-types': 'off'
    }
  }, {
    files: ['.moduleBuilder'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'import/no-unresolved': 'off',
      camelcase: 'off'
    }
  }]
};
