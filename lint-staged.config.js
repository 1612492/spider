module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '**/*.ts?(x)': () => 'tsc --noEmit',
};
