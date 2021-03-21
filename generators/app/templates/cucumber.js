const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const app = [
  ...common,
  'tests/apps/app/features/**/*.feature',
  '--require tests/apps/app/features/step_definitions/*.steps.ts'
].join(' ');
module.exports = {
  app
};
