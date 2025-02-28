const path = require('node:path');

const buildLintCommand = (filenames) =>
  `npx yarn run biome lint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

const buildFormatCommand = (filenames) =>
  `npx yarn run biome check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')} `;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildLintCommand, buildFormatCommand],
};
