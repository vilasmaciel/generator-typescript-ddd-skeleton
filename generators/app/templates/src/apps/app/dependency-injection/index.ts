import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import fs from 'fs';

const path = __dirname;
const container = new ContainerBuilder();
const defaultDefinitions = `${path}/application.yaml`;
const env = process.env.NODE_ENV;
const environmentDefinitions = `${path}/application_${env}.yaml`;
const loader = new YamlFileLoader(container);

if (exists(environmentDefinitions)) {
  loader.load(environmentDefinitions);
} else {
  loader.load(defaultDefinitions);
}

export default container;

function exists(file: string) {
  return fs.existsSync(file);
}
