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
For example https://google.com

## Test Execution

#### Run in Chrome/Firefox simultaneosly

```bash
$ npx wdio wdio.conf.js
```

## Linting

If you just want to lint your code with [eslint](https://eslint.org/) run:

```bash
$ yarn lint
```

To fix the linting errors you can run:

```bash
$ yarn lint --fix
```
