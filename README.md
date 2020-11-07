# Interview exercise

## About

This repo contains the end2end tests for the interview exercise.

Uses Javascript stack, namely WebdriverIO, a test framework for Node.js that runs on the WebDriver Protocol for cross browser testing.
For now supports execution in Chrome and Firefox browsers.

## Install

Before proceeding make sure you have NodeJS.

- [NodeJS](https://nodejs.org/en/) - Javascript Runtime

Clone the repository:

```bash
$ git clone git@github.com:pedrommvv/exercise-interview.git
```

Then `cd exercise-interview` and:

```bash
$ npm install
```

Rename the `.env.example` to `.env` file in the root of the project and fullfil the necessary variables. (For now only the website URL).
In this case ACCEPTANCE_URL=https://shop.mercedes-benz.com/en-gb/collection

For usage of geckodriver (Firefox) in Mac Catalina 10.15, [bypass the notarization](https://firefox-source-docs.mozilla.org/testing/geckodriver/Notarization.html) requirement on macOS.
Below commands should fix it.

```bash
cd node_modules/geckodriver/
```

```bash
% xattr -r -d com.apple.quarantine geckodriver
```

## Test Execution

#### Run in Chrome/Firefox simultaneously

```bash
$ npx wdio wdio.conf.js
```

## Issues and Notes

Tested in:
MacOS Catalina 10.15
Node.js v12.18.0
WebDriverIO v6
Chrome Browser Version 86.0.4240.183 (Official Build) (x86_64)
Firefox Browser Version 82.0.2 (64-bit)

Windows
Couldn't start geckodriver in Windows (need more clarification..)
