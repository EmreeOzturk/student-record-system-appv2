module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },

    plugins: ['@typescript-eslint'],
    extends: [
        'next/core-web-vitals',
        'prettier',
        'plugin:security/recommended',
    ],

    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        ],
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-nested-ternary': 'off',
    },
};
