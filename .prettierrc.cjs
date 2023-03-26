/**
 * @type {import('prettier').Options}
 *
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 80,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: false,
  bracketSameLine: false,
  rangeStart: 0,
  rangeEnd: Number.POSITIVE_INFINITY,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  quoteProps: "consistent",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
};
