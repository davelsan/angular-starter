// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { join }   from 'path';
import { Config } from 'karma';
import { executablePath } from 'puppeteer';


if (!process.env.CI) process.env.CHROME_BIN = executablePath();

export default function (config: Config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-verbose-reporter',
      '@angular-devkit/build-angular/plugins/karma'
    ],
    client: {
      // leave Jasmine Spec Runner output visible in browser
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, './coverage/angular-tailwind-eslint'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      'ChromeHeadless',
    ],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      }
    },
  });
};
