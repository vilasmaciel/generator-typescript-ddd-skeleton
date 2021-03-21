'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the perfect ${chalk.red('generator-typescript-ddd-skeleton')} generator!`));
  }

  writing() {
    this.config.save();

    const appName = _.kebabCase(path.basename(process.cwd()));
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), { appName });

    this._copy('.');
    this._copy('.nvmrc');
    this._copy('.gitignore');
    this._copy('.prettierrc');
    this._copy('.editorconfig');
    this._copy('src/apps/app/config/.gitkeep');
    this.fs.delete('_package.json');
  }

  install() {
    this.npmInstall();
  }

  _copy(src, dest) {
    dest = dest || src;
    this.fs.copy(this.templatePath(src), this.destinationPath(dest));
  }
};
