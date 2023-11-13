module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.{ts,tsx,svelte}': 'eslint --fix',
  '*.{ts,tsx,svelte}': () => 'svelte-check --tsconfig ./tsconfig.json',
};
