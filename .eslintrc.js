module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    env: {
        browser: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
    rules: {
        'no-plusplus': 0,
        'no-console': 0,
        'spaced-comment': 0,
        'no-restricted-globals': 0,
        'prettier/prettier': 1,
        'consistent-return': 0,
        'no-nested-ternary': 0,
        'no-unused-expressions': 0,
        'no-param-reassign': 0,
        'import/no-unresolved': 0,
        'no-bitwise': 0,
        'no-shadow': 0,
        'default-case': 0,
        'no-restricted-syntax': 0,
        'prefer-template': 0,
        'newline-before-return': 0,
        'no-return-assign': 0,
        'class-methods-use-this': 0,
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-default-export': 2,
        'import/no-self-import': 2,
        'react/destructuring-assignment': 0,
        'import/no-named-as-default': 2,
        'arrow-body-style': 2,
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-boolean-value': 0,
        'react/jsx-curly-brace-presence': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-empty-function': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,

        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};