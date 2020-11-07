# Interview exercise

## About

This repo contains the end2end tests for the interview exercise.

Uses Javascript stack, namely WebdriverIO, a test framework for Node.js that runs on the WebDriver Protocol for cross browser testing.
For now supports execution in Chrome and Firefox browsers.

## Install

First clone it:

```bash
$ git@github.com:pedrommvv/exercise-interview.git
```

Then `cd exercise-interview` and:

```bash
$ npm install
```

Rename the `.env.example` to `.env` file in the root of the project and fullfill the necessary variables. (For now only the website URL).
For example ACCEPTANCE_URL=https://google.com

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
