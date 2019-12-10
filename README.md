# koa-service-sample

## What?

A sample service written in typescript and Koa to serve as a template for future projects.


## Requirements
[Docker](https://docs.docker.com/engine/installation/) and [Docker Compose](https://docs.docker.com/compose/install/)


## Running Locally

(npm install if you have never run encore locally)

`npm run dev`


## Environmental Variables
Found in `config.ts`

* `ENVIRONMENT` - Environment application is running in. Default: "local"
* `PORT` - Port the server is started on. Default: 3000
* `LOG_LEVEL` - Log level for application ( error, warn, info, debug ). Default: debug
* `API_URL` - Gateway URL, or base URL for any proxy calls.
* `DB_HOST`
* `DB_USER`
* `DB_PORT`
* `DB_PASSWORD`
* `DB_POOL_MIN`
* `DB_POOL_MAX`


# Development Guide

## Debug
When you run locally, we run node in inspect mode, so port 9229 is available to debug. There is already a debug profile avilable if you use vscode.

## Linter
```
    cd app
    npm run lint
```
