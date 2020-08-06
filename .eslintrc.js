module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'off',
    'no-unreachable': 'off',
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}