import config from "eslint-config-airbnb";
import { defineConfig } from "@eslint/config-helpers";
import * as tseslint from "typescript-eslint";
import * as eslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";


export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    eslintConfigPrettier
)
