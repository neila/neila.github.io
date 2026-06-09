const path = require('node:path');

const buildLintCommand = (filenames) =>
  `yarn run biome lint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')} --no-errors-on-unmatched`;

const buildFormatCommand = (filenames) =>
  `yarn run biome check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')} --no-errors-on-unmatched`;

module.exports = {
  // biome-ignore lint/complexity/noCommaOperator: <>
  [('**/*.{js,jsx,ts,tsx}', '!next-env.d.ts')]: [
    buildLintCommand,
    buildFormatCommand,
  ],
};
