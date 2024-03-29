const path = require("path");

const buildLintCommand = (filenames) =>
  `npx yarn run biome lint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildFormatCommand = (filenames) =>
  `npx yarn run biome check --linter-enabled=false ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")} `;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [buildLintCommand, buildFormatCommand],
};
