import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Tell ESLint to completely ignore build/static folders so it doesn't read minified scripts
  {
    ignores: [
      ".next/*",
      "out/*",
      "node_modules/*",
      "_static/*",
      "sammy.js"
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: Object.assign({}, globals.browser, globals.node)
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",

      // 2. Turn off the annoying unescaped quote mark rule
      "react/no-unescaped-entities": "off"
    }
  }
]);