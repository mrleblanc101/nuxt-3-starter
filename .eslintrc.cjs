// TODO: Update for TypeScript and Nuxt3
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    // extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended',
        'prettier',
    ],
    // plugins: ['prettier', 'no-smart-quotes'],
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'nuxt/no-cjs-in-config': 'off',
        'vue/html-button-has-type': 'error',
        'object-shorthand': ['error', 'always'],
        'no-unused-vars': 'warn',
        'vue/no-unused-components': 'warn',
        'import/newline-after-import': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        // 'no-smart-quotes/no-smart-quotes': 'error',
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
};
