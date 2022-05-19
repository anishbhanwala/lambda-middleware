# @lambda-middleware/servertiming

[![npm version](https://badge.fury.io/js/%40lambda-middleware%2Fservertiming.svg)](https://npmjs.org/package/@lambda-middleware/servertiming)
[![downloads](https://img.shields.io/npm/dw/%40lambda-middleware%2Fservertiming.svg)](https://npmjs.org/package/@lambda-middleware/servertiming)
[![open issues](https://img.shields.io/github/issues-raw/dbartholomae/lambda-middleware.svg)](https://github.com/dbartholomae/lambda-middleware/issues)
[![debug](https://img.shields.io/badge/debug-blue.svg)](https://github.com/visionmedia/debug#readme)
[![build status](https://github.com/dbartholomae/lambda-middleware/workflows/.github/workflows/build.yml/badge.svg?branch=main)](https://github.com/dbartholomae/lambda-middleware/actions?query=workflow%3A.github%2Fworkflows%2Fbuild.yml)
[![codecov](https://codecov.io/gh/dbartholomae/lambda-middleware/branch/main/graph/badge.svg)](https://codecov.io/gh/dbartholomae/lambda-middleware)
[![dependency status](https://david-dm.org/dbartholomae/lambda-middleware.svg?theme=shields.io)](https://david-dm.org/dbartholomae/lambda-middleware)
[![devDependency status](https://david-dm.org/dbartholomae/lambda-middleware/dev-status.svg)](https://david-dm.org/dbartholomae/lambda-middleware?type=dev)

Add server-timing headers in response

## Lambda middleware

This middleware is part of the [lambda middleware series](https://dbartholomae.github.io/lambda-middleware/). It can be used independently.

## Usage

```typescript
import { serverTiming } from "@lambda-middleware/servertiming";
import { APIGatewayProxyResult } from "aws-lambda";

// This is your AWS handler
async function helloWorld(): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: "",
  };
}

// Wrap the handler with the middleware
export const handler = serverTiming()(helloWorld);
```
