/* eslint-env node */
/**
 * In order to work around a known limitation in ESLint, we recommend you to use this package alongside @rushstack/eslint-patch, so that you don't have to install too many dependencies:
 *
 * @see https://github.com/eslint/eslint/issues/3458
 */
require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * @type {import('eslint').Linter.Config}
 *
 * @see https://eslint.org/docs/latest/user-guide/configuring/
 */
module.exports = {
  root: true,
  ignorePatterns: ["**/dist/**"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  /**
   * extends는 eslint-config 목록을 재귀적으로 병합하므로, eslint-config 목록의 순서를 변경할 때 유의해야 합니다.
   *
   * @see https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files
   *
   * @see https://github.com/vuejs/eslint-config-prettier#usage
   * @see https://github.com/vuejs/eslint-config-typescript#usage
   */
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/attribute-hyphenation": ["error", "never"],
    /** @see https://github.com/prettier/eslint-config-prettier#vuehtml-self-closing */
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
        },
      },
    ],
  },
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.js", "*.cjs", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["src/markup/**/*"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
  settings: {
    /** @see https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration */
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
};
