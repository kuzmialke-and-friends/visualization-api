# Visualization API

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting started](#getting-started)
- [Core Concepts](#core-concepts)
- [API](#api)
- [Continous Integration & Deployment](#continous-integration-&-deployment)
- [Datasets](#datasets)
  - [BIRAFFE2](#biraffe2)

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
DATA_BACKEND=${YOUR_DATA_BACKEND_URL} npm run start:dev
```

### Build and run production

```bash
npm run build
DATA_BACKEND=${YOUR_DATA_BACKEND_URL} npm start
```

### Run test

```bash
npm test
```

### Visualization API will be running on:

http://localhost:3000/

## Core Concepts

Visualization API purpose is to fetch datasets and prepare them for visualization using frontend
React + D3.js app.

It is a [koa](https://koajs.com/) app that is meant to be run as
[lambda](https://aws.amazon.com/lambda/) fetching from [S3](https://aws.amazon.com/s3/) in
production environment using [serverless](https://www.serverless.com/) and
[serverless-http](https://github.com/dougmoscrop/serverless-http), however other than testing
purposes it is not live due to financial reasons and should be used locally together with a simple
JSON serving server like
[visualization-data](https://github.com/kuzmialke-and-friends/visualization-data).

## API

_TODO:_ implement API specs

Visualization API will output data from dataset in format:

```ts
{
dataset: unknown;
supportedVisualizations: Visualization[];
}
```

## Continous Integration & Deployment

This repository uses Travis for testing each change done to codebase automatically and as early as
possible. Continuous Deployment follows the testing that happens during CI and pushes changes to
production system.

Stages:

### Test

- run tests
- run linting

### Deploy

- currently disabled
- automatically deploys lambda to AWS

## Datasets

### BIRAFFE2

The **"BIRAFFE2: The 2nd Study in Bio-Reactions and Faces for Emotion-based Personalization for AI
Systems"** dataset is part of the work carried out by the AfCAI Research Group in Kraków, Poland.

Source: [BIRAFFE2](https://zenodo.org/record/3865860#.XvjpwecwhPY)