/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier', 'tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/html-self-closing': [
      'warn',
      {
        html: { void: 'always' }
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'tailwindcss/no-custom-classname': ['warn', { whitelist: ['fa\\S*'] }]
      }
    }
  ],
  ignorePatterns: ['./**/ui/**/*']
}
