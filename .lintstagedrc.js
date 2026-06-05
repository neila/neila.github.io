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
  // biome-ignore lint/complexity/noCommaOperator: <>
  [('**/*.{js,jsx,ts,tsx}', '!next-env.d.ts')]: [
    buildLintCommand,
    buildFormatCommand,
  ],
};
