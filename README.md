# Visualization API

[![Build Status](https://travis-ci.org/kuzmialke-and-friends/visualization-api.svg?branch=main)](https://travis-ci.org/kuzmialke-and-friends/visualization-api)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Core Concepts](#core-concepts)
- [Getting started](#getting-started)
- [API](#api)
- [Continous Integration & Deployment](#continous-integration-&-deployment)
- [Datasets](#datasets)
  - [BIRAFFE2](#biraffe2)

## Core Concepts

Visualization API purpose is to fetch datasets and prepare them for visualization using frontend
React + D3.js app.

It is a [koa](https://koajs.com/) app that is meant to be run as
[lambda](https://aws.amazon.com/lambda/) fetching from [S3](https://aws.amazon.com/s3/) in
production environment using [serverless](https://www.serverless.com/) and
[serverless-http](https://github.com/dougmoscrop/serverless-http), however other than testing
purposes it is not live due to financial reasons and should be used locally together with a simple
JSON serving server like
[visualization-data-bucket](https://github.com/kuzmialke-and-friends/visualization-data-bucket).

It is also hosted in Heroku for convenience sake
[Heroku preview](https://knf-visualization-api.herokuapp.com).

## Getting started

### Clone the repository and go inside it

```bash
git clone https://github.com/kuzmialke-and-friends/visualization-api
cd visualization-api
```

### Check node&npm version and install dependencies

```bash
nvm use
npm i
```

### Start development server

```bash
DATA_BACKEND=https://knf-visualization-data-bucket.herokuapp.com/assets/biraffe npm run start:dev
```

### Build and run production

```bash
npm run build
PORT=3000 DATA_BACKEND=https://knf-visualization-data-bucket.herokuapp.com/assets/biraffe npm start
```

### Run test

```bash
npm test
```

### Visualization API will be running on:

http://localhost:3000/

## API

_TODO:_ implement API specs

### Endpoints:

#### Datasets

```
/datasets/:id
```

Query parameters:

- limit - default 2, limits number of subjects we sent data to

**Note**: does not work on Heroku due to memory constraints, TODO: fix memory limitation on limit
function

Examples:

```
https://knf-visualization-api.herokuapp.com/datasets/ghost?limit=15
https://knf-visualization-api.herokuapp.com/datasets/jump
```

#### Static Maps

```
/static-map/:id
```

Examples:

```
https://knf-visualization-api.herokuapp.com/static-map/ghost
```

Visualization API will output data from dataset in format:

```ts
{
subjects: Subjects;
supportedVisualizations: VisualizationType[];
}
```

#### Health

```
/health
```

Returns 200 with `Ok` body response.

```
https://knf-visualization-api.herokuapp.com/health
```

## Continous Integration & Deployment

Code is written and meant to be run as Lambda, however it is currently deployed to Heroku using
their Free Dynos.

This app uses Travis for testing each change done to codebase automatically and as early as
possible. Continuous Deployment follows the testing that happens during CI and pushes changes to
production system.

Stages:

### Test

- run tests
- run linting

### Build

- builts app

### Deploy

- currently disabled
- automatically deploys lambda to AWS

## Datasets

### BIRAFFE2

The **"BIRAFFE2: The 2nd Study in Bio-Reactions and Faces for Emotion-based Personalization for AI
Systems"** dataset is part of the work carried out by the AfCAI Research Group in Kraków, Poland.

Source: [BIRAFFE2](https://zenodo.org/record/3865860#.XvjpwecwhPY)
