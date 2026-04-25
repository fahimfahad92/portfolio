import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),

    {
        rules: {
            // Catch unused variables; ignore underscore-prefixed intentional stubs
            "no-unused-vars": ["error", {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            }],

            // Warn on console.log (acceptable in dev); allow .error and .warn
            "no-console": ["warn", { allow: ["error", "warn"] }],

            // Prevent accidental duplicate imports of the same module
            "no-duplicate-imports": "error",

            // Disallow var — only let/const
            "no-var": "error",

            // Prefer const when variable is never reassigned
            "prefer-const": ["error", { destructuring: "all" }],
        },
    },
];

export default eslintConfig;
