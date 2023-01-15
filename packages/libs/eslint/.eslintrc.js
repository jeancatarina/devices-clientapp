module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  root: true,
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    'prettier/standard',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },

  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers'
  ],

  rules: {
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 80
      }
    ],
    'no-undef': 'off',
    camelcase: 'off',
    'import/no-unresolved': 'off',
    indent: 'off',
    'prefer-destructuring': 'off',
    'no-confusing-arrow': 'off',
    'react/prop-types': 'off',
    'react/jsx-newline': 'off',
    'react/display-name': 'off',
    'no-use-before-define': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-undefined': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'generator-star-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'comma-dangle': 'off',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'space-before-function-paren': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'import/extensions': 'off',
    'padded-blocks': 'warn',
    'react/jsx-no-undef': 'warn',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] }
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react$/',
          'module',
          '/^react-redux/',
          '/^redux/',
          '/^App/store/',
          '/^@onboarding/',
          '/^App/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'desc', ignoreCase: true }
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^[A-Z]'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {}
    }
  }
}
