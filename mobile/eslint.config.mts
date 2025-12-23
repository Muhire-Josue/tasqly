/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["node_modules", "dist", "build", ".expo"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  reactPlugin.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ReactNative: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      "react-hooks": reactHooks as any,
      "react-native": reactNative as any,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React hooks safety
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Modern JSX transform – no need to import React in scope
      "react/react-in-jsx-scope": "off",

      // From your generated config
      complexity: ["error", 10],
      "no-await-in-loop": "warn",
      "no-eval": "error",
      "no-implied-eval": "error",
      "prefer-promise-reject-errors": "warn",
    },
  },
]);
