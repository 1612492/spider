/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
