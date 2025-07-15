import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import next from "@next/eslint-plugin-next";

// Simpler __dirname alternative
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname, // Add plugin resolution
});

export default [
  // Ignore files/directories
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/out/**",
      "**/coverage/**",
    ],
  },

  // Add Next.js plugin directly
  {
    plugins: {
      "@next/next": next,
    },
  },

  // Extend configurations
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ),

  // Add custom rules here
  {
    rules: {
      "@next/next/no-html-link-for-pages": "error",
    },
  },
];
