import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // TypeScript support avec type-aware rules
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    // Prettier
    eslintConfigPrettier,

    // Config custom
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['**/.eslintrc.js', '**/eslint.config.mjs'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./packages/*/tsconfig.json'], // pour les monorepos
                tsconfigRootDir: new URL('.', import.meta.url).pathname,
            },
        },
        rules: {
            // Ajoute tes règles ici
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },
];
