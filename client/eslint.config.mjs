import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import tailwind from "eslint-plugin-tailwindcss";

// Pour gérer les chemins en ES Modules
import { fileURLToPath } from "url";
import { dirname } from "path";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...ts.configs.recommended,
      ...tailwind.configs["flat/recommended"],
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      tailwindcss: {
        config: dirname(fileURLToPath(import.meta.url)) + "/src/index.css",
      },
    },
  },
]);
