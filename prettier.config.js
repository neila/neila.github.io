module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  singleQuote: false,
  arrowParens: "always",
  semi: true,
  tailwindConfig: "./tailwind.config.js",
  importOrder: ["^[./]", "^@/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      options: {
        importOrder: [
          //なぜこの順番が要求されるのかはわからない
          "fs",
          "path",
          "next",
          "<THIRD_PARTY_MODULES>",
        ],
      },
    },
  ],
};
