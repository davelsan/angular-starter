// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

import { SpecReporter } from 'jasmine-spec-reporter';
import { join }         from 'path';
import { Config }       from 'protractor';
import { register }     from 'ts-node';


export const config: Config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    register({
      compilerOptions: {
        module: 'CommonJS'
      },
      project: join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({ spec: { displayStacktrace: true } })
    );
  }
};