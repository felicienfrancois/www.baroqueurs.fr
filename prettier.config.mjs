/** @type {import("prettier").Config} */
export default {
  printWidth: 150,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
