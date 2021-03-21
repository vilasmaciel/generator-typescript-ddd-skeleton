'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ddd-skeleton:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ someAnswer: true });
  });

  it('creates all the generator files', () => {
    assert.file(['package.json']);
    assert.file(['tsconfig.json']);
    assert.file(['tslint.json']);
    assert.file(['.prettierrc']);
    assert.file(['.editorconfig']);
    assert.file(['.nvmrc']);
    assert.file(['src/apps/app/config/.gitkeep']);
    assert.file(['src/apps/app/Application.ts']);
    assert.file(['src/apps/app/server.ts']);
    assert.file(['src/Contexts/shared/domain/Logger.ts']);
    assert.file(['tests/unit.test.ts']);
  });
});
