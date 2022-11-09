module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin: react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: require.resolve('react/package.json').version,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 사용하려는 추가 언어 기능을 나타내는 개체
    ecmaFeatures: {
        jsx: true,
    }
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off',
  },
};
